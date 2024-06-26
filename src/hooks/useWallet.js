import {
  ref, reactive, getCurrentInstance, toRefs,
} from 'vue';
import Web3, { utils } from 'web3';
import Web3Modal from 'web3modal';
import { getChainData } from '@/web3/tools';
import { providerOptions } from '@/web3/config';

const INITIAL_STATE = {
  web3: null,
  provider: null,
  userAddress: '',
  connected: false,
  chainId: 1,
  networkId: 1,
};
export default function useWallet() {
  // const { ctx: _this } = getCurrentInstance();
  const { proxy: _this } = getCurrentInstance();

  const walletObj = reactive({ ...INITIAL_STATE });
  const fetching = ref(false);
  const assets = ref(0);

  //https://github.com/Web3Modal/web3modal#web3modal
  const web3Modal = new Web3Modal({
    theme: 'dark',//light
    network: getChainData(walletObj.chainId).network,
    cacheProvider: true,
    providerOptions,
  });

  // methods
  const resetApp = async () => {
    const { web3 } = walletObj;
    // samson - use "disconnect" instead of "close"
    // if (web3 && web3.currentProvider && web3.currentProvider.close) {
    //   await web3.currentProvider.close();
    // }
    if (web3 && web3.currentProvider && web3.currentProvider.disconnect) {
      await web3.currentProvider.disconnect();
    }

    web3Modal.clearCachedProvider();
    assets.value = 0;
    Object.keys(INITIAL_STATE).forEach((e) => {
      walletObj[e] = INITIAL_STATE[e];
    });
    _this.$forceUpdate();
  };

  //samson edit
  // const getUserBalance = () => walletObj.web3.eth
  //   .getBalance(walletObj.userAddress)
  //   .then((res) => (res ? utils.fromWei(res.toString(), 'ether') : 0));


  const getUserBalance = () => {
    if(walletObj?.web3?.eth) {
      return walletObj.web3.eth
          .getBalance(walletObj.userAddress)
          .then((res) => (res ? utils.fromWei(res.toString(), 'ether') : 0));
    } else {
      return 0;
    }
  }
  //EOF samson edit

  const getAccountAssets = async () => {
    fetching.value = true;
    // get account balances
    assets.value = await getUserBalance();
  };
  const subscribeProvider = async (provider) => {
    if (!provider.on) {
      return;
    }
    // provider.on('close', () => resetApp()); //samson - use "disconnect" instead https://docs.metamask.io/guide/ethereum-provider.html#legacy-methods
    provider.on('disconnect', () => resetApp());

    provider.on('accountsChanged', async (accounts) => {
      // eslint-disable-next-line prefer-destructuring
      walletObj.userAddress = accounts[0];
      await getAccountAssets();
    });
    provider.on('chainChanged', async (chainId) => {
      console.log('chainChanged', chainId);
      const networkId = await walletObj?.web3?.eth?.net.getId();
      walletObj.chainId = chainId;
      walletObj.networkId = networkId;
      await getAccountAssets();
    });
  };

  const onConnect = async () => {
    const provider = await web3Modal.connect();

    await subscribeProvider(provider);

    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();

    const address = accounts[0];

    const networkId = await web3.eth.net.getId();

    const chainId = await web3.eth.getChainId(); // 注意版本 chainId

    walletObj.web3 = web3;
    walletObj.provider = provider;
    walletObj.connected = true;
    walletObj.userAddress = address;
    walletObj.chainId = chainId;
    walletObj.networkId = networkId;
    await getAccountAssets();
  };

  return {
    ...toRefs(walletObj),
    fetching,
    assets,
    resetApp,
    getAccountAssets,
    //
    web3Modal,
    // methods
    onConnect,
  };
}
