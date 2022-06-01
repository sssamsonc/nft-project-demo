<template>
  <header id="header" ref="header" :class="{ is_scrolled : isScrolled, active : isMenuActive }">
    <nav id="nav_bar" class="font_title clearfix">
      <router-link id="logo" to="#masthead" class="font-0"
                   @click="handleMenu($event, false); handleScrollToHash($event, anchor_masthead, 0, 0);">
        <img src="../assets/Brand-logo.svg" alt="DEMO">
      </router-link>

      <button id="btn_menu" ref="btn_menu" :class="{ active : isMenuActive }" class="font-0" @click="handleMenu">Menu
        <span class="nav_icon">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      <ul :class="{ active : isMenuActive }">
        <li>
          <router-link to="#about" @click="handleMenu($event, false); handleScrollToHash($event, anchor_about);">ABOUT
          </router-link>
        </li>
        <li>
          <router-link to="#nft" @click="handleMenu($event, false); handleScrollToHash($event, anchor_nft);">NFT
          </router-link>
        </li>
        <li>
          <router-link to="#roadmap" @click="handleMenu($event, false); handleScrollToHash($event, anchor_roadmap);">
            ROADMAP
          </router-link>
        </li>
        <li>
          <router-link to="#faq" @click="handleMenu($event, false); handleScrollToHash($event, anchor_faq);">FAQ
          </router-link>
        </li>
      </ul>
    </nav>
  </header>

  <section class="masthead">
    <h2 class="font-0"><i id="masthead" class="anchor" ref="anchor_masthead"></i>NFT PROJECT DEMO -samson</h2>
    <img src="../assets/webp/1.webp" alt="XXX" class="main_banner">

    <button class="btn_scroll_down font_title" @click="handleMenu($event, false); handleScrollToHash($event, anchor_about);">
      <span>SCROLL</span>
      <i></i>
    </button>
  </section>

  <section class="intro">
    <div class="container">
      <a-row type="flex" justify="center" align="top">
        <a-col :span="24" :lg="10" class="show-for-large">
          <img src="../assets/webp/0.webp" alt="XXX" class="img1">
        </a-col>
        <a-col :span="24" :lg="12">
          <div class="intro_content">
            <h2 class="title">
              <i id="about" class="anchor" ref="anchor_about"></i>
              <span data-aos="fade-up">About XXX</span>
            </h2>
            <div class="desc" data-aos="fade-up" data-aos-delay="100">
              description here description here description here  description here  description here description here
              description here description here description here description here description here description here
              description here description here description here description here description here description here
              description here
              <br><br> description here description here description here description here description here description here
              description here description here description here description here description here description here
              description here description here description here description here description here description here
              description here
            </div>

            <div class="text-center">
              <div class="mint_desc text-left">
                <div class="" data-aos="fade-up" data-aos-delay="100">
                  <h5>MINT DATE</h5>
                  <div class="mint_desc_txt font_title">25 May 2022</div>
                </div>
                <div class="" data-aos="fade-up" data-aos-delay="150">
                  <h5>MINT PRICE</h5>
                  <div class="mint_desc_txt font_title">0.2 ETH</div>
                </div>
              </div>
            </div>

          </div>
        </a-col>
      </a-row>
    </div>
  </section>

  <section class="story">
    <div class="container">
      <a-row type="flex" justify="center" align="top">
        <a-col :span="24">
          <div class="story_content">
            <h2 class="title">
              <i id="story" class="anchor" ref="anchor_story"></i>
              <span data-aos="fade-up">Story<br>Title xxxx</span>
            </h2>
            <div class="desc" data-aos="fade-up" data-aos-delay="100">
              Story content here Story content here Story content here Story content here Story content here Story content here
              Story content here Story content here Story content here Story content here Story content here Story content here
              Story content here Story content here Story content here Story content here
              <br><br> Story content here Story content here Story content here Story content here Story content here
              Story content here Story content here Story content here Story content here Story content here Story content here
              Story content here
              <p class="highlight" data-aos="fade-up" data-aos-delay="100">Adventure starts, are you ready?</p>
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
    <img src="../assets/webp/2.webp" alt="XXX" class="width-100 hide-for-large">
  </section>

  <section class="collection">
    <div class="container">
      <a-row type="flex" justify="center" align="top">
        <a-col :span="24">
          <h2 class="title">
            <i id="nft" class="anchor" ref="anchor_nft"></i>
            <span data-aos="fade-up">NFT</span>
          </h2>
        </a-col>
      </a-row>

      <a-row :gutter="[{xs:16, sm:16, md:16, lg:16},{xs:16, sm:16, md:16, lg:16}]" data-aos="fade-up"
             data-aos-delay="100">
        <a-col :span="12" :xl="6"
               v-for="(c, idx) in collectionItems"
               :key="idx"
        >
          <mint-item
              :id="c.id"
              :name="c.name"
              :sold="c.sold"
              :image="c.image"
              :connected="connected"
              :isConnectedCorrectly="isConnectedCorrectly"
              :userAddress="userAddress"
              :web3="web3"
              @mintClicked="handleMint($event, id)"
              :isMinting="isMinting"
              @clickConnectWallet="handleConnectWallet"
          />
        </a-col>
      </a-row>

    </div>
  </section>

  <section class="roadmap">
    <div class="container">
      <a-row type="flex" justify="center" align="top">
        <a-col :span="24">
          <h2 class="title">
            <i id="roadmap" class="anchor" ref="anchor_roadmap"></i>
            <span data-aos="fade-up">ROADMAP</span>
          </h2>
        </a-col>
        <a-col :span="24" :lg="12">
          <dl data-aos="fade-up" data-aos-delay="100">
            <dt class="icon"><img src="../assets/Icon-01.svg"
                                  alt="Privilege 1" class=""></dt>
            <dd>
              <h4>Privilege 1</h4>
              <p>desc here desc here desc here desc here desc here desc here desc here desc here desc here desc here</p>
            </dd>
          </dl>
        </a-col>
        <a-col :span="24" :lg="12">
          <dl data-aos="fade-up" data-aos-delay="100">
            <dt class="icon"><img src="../assets/Icon-02.svg" alt="Privilege 2"
                                  class=""></dt>
            <dd>
              <h4>Privilege 2</h4>
              <p>desc here desc here desc here desc here desc here desc here desc here desc here desc here desc here</p>
            </dd>
          </dl>
        </a-col>
        <a-col :span="24"/>
        <a-col :span="24" :lg="12">
          <dl data-aos="fade-up" data-aos-delay="100">
            <dt class="icon"><img src="../assets/Icon-03.svg"
                                  alt="Privilege 3" class=""></dt>
            <dd>
              <h4>Privilege 3</h4>
              <p>desc here desc here desc here desc here desc here desc here desc here desc here desc here desc here</p>
            </dd>
          </dl>
        </a-col>
        <a-col :span="24" :lg="12">
          <dl data-aos="fade-up" data-aos-delay="100">
            <dt class="icon"><img src="../assets/Icon-04.svg" alt="Privilege 4"
                                  class=""></dt>
            <dd>
              <h4>Privilege 4</h4>
              <p>desc here desc here desc here desc here desc here desc here desc here desc here desc here desc here</p>
            </dd>
          </dl>
        </a-col>
      </a-row>
    </div>
  </section>

  <section class="faq">
    <div class="container">
      <a-row type="flex" justify="center" align="top">
        <a-col :span="24">
          <h2 class="title">
            <i id="faq" class="anchor" ref="anchor_faq"></i>
            <span data-aos="fade-up">FAQ</span>
          </h2>
          <cust-faq v-for="(f, idx) in FAQS"
                    :key="idx"
                    :question="f.q"
                    :answer="f.a"/>
        </a-col>
      </a-row>
    </div>
  </section>

  <footer>
    <ul class="font-0">
      <li><a href="https://github.com/sssamsonc" target="_blank"><img src="../assets/Icon-IG.svg"
                                                            alt="Instagram"/></a></li>
      <li><a href="https://github.com/sssamsonc" target="_blank"><img src="../assets/Icon-FB.svg"
                                                            alt="Facebook"/></a></li>
      <li><a href="https://github.com/sssamsonc" target="_blank"><img
          src="../assets/Icon-Web.svg" alt="Website"/></a></li>
      <li><a href="https://github.com/sssamsonc" target="_blank"><img
          src="../assets/opensea.svg" class="opensea" alt="OpenSea"/></a></li>
    </ul>

    <p class="copy_right">© NFT PROJECT DEMO</p>
  </footer>

  <div class="header container">

  </div>

</template>

<script>
import {onMounted, onUnmounted, computed, ref, inject, h, watch} from 'vue';
import useWallet from '../hooks/useWallet';

import MintItem from '@/components/MintItem.vue';
import CustFaq from '@/components/CusFaq.vue';

import {message, notification} from 'ant-design-vue';
import {CORRECT_CHAIN_IDS, CORRECT_CHAIN_PARAMS, TX_EXPLORER_URL, COLLECTION_ITEMS, FAQS} from '@/config/constants';
import {CONTRACT_ABI, CONTRACT_ADDRESS} from "@/config/contract";
import {utils} from "web3";

export default {
  components: {
    MintItem, CustFaq
  },
  setup() {
    const {
      onConnect,
      connected,
      web3,
      userAddress,
      chainId,
      networkId,
      resetApp,
      assets,
      getAccountAssets,
    } = useWallet();

    //======================= CONNECT WALLET =======================
    let hideMessage0 = null;
    const MessageKey0 = "abc";

    const isConnectedCorrectly = computed(() => {
      return connected.value && CORRECT_CHAIN_IDS.includes(chainId.value.toString());
    });

    const handleConnectWallet = async (isLogin = true) => {
      if (isLogin) {
        hideMessage0 = message.loading({content: "Connecting to wallet...", key: MessageKey0, duration: 0});

        if (typeof window.ethereum === 'undefined') {
            notification.error({
              message: "Please install MetaMask wallet!",
              placement: "topRight",
              duration: 5,
            });

            hideMessage0();
            return false;
        }

        await onConnect().then(async () => {
          if (connected) {
            // console.log("afterConnectdWallet", connected);
            console.log("chainId", chainId.value);
            console.log("networkId", networkId.value);

            if (!isConnectedCorrectly.value) {
              await switchNetwork();
              await updateContractInfo();
            } else {
              await updateContractInfo();
            }

            if (isSupportLocalStorage()) {
              localStorage.setItem("walletConnected", "1");
            }

            hideMessage0();
          }
        }).catch((e) => {
          console.log("onConnect catch:");
          console.log(e);
          hideMessage0 = message.loading({content: `Failed to connect Wallet`, key: MessageKey, duration: 3});
        });
      } else {
        await resetApp();
        if (isSupportLocalStorage()) {
          localStorage.setItem("walletConnected", "0");
        }
      }
    };

    const switchNetwork = async () => {
      console.log("switchNetwork");
      try {
        if(CORRECT_CHAIN_IDS.length === 0) throw "CORRECT_CHAIN_IDS is empty!";

        let id = (CORRECT_CHAIN_IDS[0].lastIndexOf("0x", 0) === 0) ? CORRECT_CHAIN_IDS[0] : `0x${CORRECT_CHAIN_IDS[0]}`;

        await web3.value.currentProvider.request({
          method: "wallet_switchEthereumChain",
          params: [{chainId: id}],
        });
      } catch (error) {
        if (error.code === 4902) {
          try { //add network to wallet if does exist
            await web3.value.currentProvider.request({
              method: "wallet_addEthereumChain",
              params: CORRECT_CHAIN_PARAMS,
            });
          } catch (e) {
            console.log("switchNetwork ERROR:", e);
          }
        }
      }
    };

    const isSupportLocalStorage = () => {
      return window.localStorage !== undefined;
    };
//======================= EOF CONNECT WALLET =======================


//======================= WEBSITE EFFECTS =======================
    const isScrolled = ref(false);
    const handleScroll = () => {
      const top = window.pageYOffset || document.documentElement.scrollTop;
      // left = window.pageXOffset || document.documentElement.scrollLeft;
      // console.log(top, left);
      if (top >= 20) {
        isScrolled.value = true;
      } else {
        isScrolled.value = false;
      }
    };

    const anchor_masthead = ref(null);
    const anchor_about = ref(null);
    const anchor_story = ref(null);
    const anchor_nft = ref(null);
    const anchor_roadmap = ref(null);
    const anchor_faq = ref(null);

    const header = ref(null);
    const btn_menu = ref(null);
    const smoothScroll = inject('smoothScroll');
    const handleScrollToHash = (event, obj, desktop_offset = 0, mb_offset = -45) => {
      let offset = 0;
      if (btn_menu.value.offsetParent) { //if is mobile
        offset = btn_menu.value.offsetHeight + mb_offset;
      } else {
        offset = header.value.offsetHeight + desktop_offset;
      }

      smoothScroll({
        scrollTo: obj, //element
        duration: 500,
        offset: 0 - offset,
        updateHistory: false, // whether to push hash to history
      })

    }

    const isMenuActive = ref(false);
    const handleMenu = (event, open = null) => {
      if (open === null) {
        isMenuActive.value = !isMenuActive.value;
      } else if (open) {
        isMenuActive.value = true;
      } else {
        isMenuActive.value = false;
      }
    };

    const collectionItems = ref(COLLECTION_ITEMS);
//=======================EOF WEBSITE EFFECTS =======================


//======================= GET CONTRACT IF CONNECTED WALLET =======================
    const my_contract = computed(
        () => {
          if (isConnectedCorrectly.value) {
            return new web3.value.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
          }
          return null;
        });
//======================= EOF GET CONTRACT IF CONNECTED WALLET =======================


//======================= MINT =======================
    const mintStatus = ref(0);

    const isMinting = ref(false);
    let hideMessage = null;
    const MessageKey = "abc";
    const handleMint = async (data) => {
      try {
        // console.log("handleMint", data);
        isMinting.value = true;
        hideMessage = message.loading({content: "Waiting for Signature...", key: MessageKey, duration: 0});

        if (my_contract.value) {
          if (mintStatus.value > 0) {
            const id = isNaN(parseInt(data.id)) ? 0 : parseInt(data.id);

            //check the item has been sold or not
            await updateContractInfo(); //get the latest info before mint
            const is_sold = collectionItems.value.some(el => {
              return (el.id === id) && (el.sold);
            });
            if(is_sold) throw {message: `This item has been sold.`};

            //check user has enough ETH or not
            await getAccountAssets();
            if (assets.value < mint_fee_eth.value) throw {message: `You don't have enough ETH!`};

            // await my_contract.value.methods.mint(1, wl_proof.value).estimateGas( async(er) => {
            //   if (!er) {
            console.log("handleMint", userAddress.value, mint_fee.value, id);
            await my_contract.value.methods.mint(id).send({
              from: userAddress.value,
              value: mint_fee.value
            }, async (error, result) => {
              if (result) { //success //return tx hash
                hideMessage = message.loading({
                  content: () => {
                    return h("div", [
                      "Minting in progress...",
                      h("br"),
                      "(",
                      h(
                          "a",
                          {
                            href: TX_EXPLORER_URL + `/tx/${result}`,
                            target: "_blank"
                          },
                          [`${result}`]
                      ),
                      ")",
                    ]);
                  },
                  key: MessageKey,
                  duration: 0
                });

                console.log("mint txhash", result);
                subscribe_mint_success_event(my_contract.value);//use contract event MintSuccessEvent - rinkeby
              }
            });
            //   } else {
            //     console.log(er);
            //   }
            // });
          } else {
            notification.error({
              message: "Mint event not start!",
              placement: "topRight",
              duration: 5,
            });

            isMinting.value = false;
            if (hideMessage !== null) {
              hideMessage();
              hideMessage = null;
            }
          }
        } else {
          notification.error({
            message: "Unable to get Contract Info!",
            placement: "topRight",
            duration: 5,
          });

          isMinting.value = false;
          if (hideMessage !== null) {
            hideMessage();
            hideMessage = null;
          }
        }
      } catch (e) {
        notification.error({
          message: "Mint Failed!",
          description: e.message,
          placement: "topRight",
          duration: 0,
        });

        isMinting.value = false;
        if (hideMessage !== null) {
          hideMessage();
          hideMessage = null;
        }
      }
    };
//======================= EOF MINT =======================


//======================= GET CONTRACT INFO =======================
    const mint_fee = ref(0);
    const mint_fee_eth = ref(0);
    const updateContractInfo = async () => {
      if (my_contract.value) {
        mintStatus.value = await my_contract.value.methods.MINT_STATUS.call()?.call();
        mint_fee.value = await my_contract.value.methods.MINT_FEE.call()?.call();
        mint_fee_eth.value = utils.fromWei(mint_fee.value, 'ether');

        let minted_ids = await my_contract.value.methods.getMintedIds().call();
        // if (test_sold) {
        //   minted_ids = Object.assign([], minted_ids);
        //   minted_ids.push("19");
        //   console.log(minted_ids);
        // }
        if (minted_ids != null && Array.isArray(minted_ids) && minted_ids.length > 0) {
          for (const minted_id of minted_ids) {
            for (const c of collectionItems.value) {
              if (c.id === parseInt(minted_id)) {
                c.sold = true;
                break;
              }
            }
          }
        }
        console.log('updateContractInfo');
      } else {
        console.log('updateContractInfo - unable to get contract info!');
      }
    };
//======================= EOF GET CONTRACT INFO =======================


//======================= EVENT =======================
    const subscribe_mint_success_event = (contract) => {
      try {
        contract.once("MintSuccessEvent", async (error, result) => { //fire once
          if (result) {
            notification.success({
              message: `Mint Successful`,
              description: `#${result.returnValues['id']} has been minted by you!`,
              placement: "topRight",
              duration: 5,
            });

            isMinting.value = false;
            if (hideMessage !== null) {
              hideMessage();
              hideMessage = null;
            }

            await updateContractInfo(); //get the latest info after mint
          }
        });
      } catch (e) {
        console.log("subscribe_mint_success_event ERROR:", e)
      }
    }
//======================= EOF EVENT =======================


    watch(userAddress, async (new_val, old_val) => { //detect if userAddress changed
      console.log("userAddress CHANGED to :", new_val);
      console.log("userAddress old_val :", old_val);

      if (typeof (new_val) === "undefined") {
        //prevent bug when user try to disconnect all accounts from Metamask manually
        await resetApp();
        if (isSupportLocalStorage()) {
          localStorage.setItem("walletConnected", "0");
        }
        window.location.reload();
      }
    });

    onMounted(async () => {
      // console.log("onMounted");
      if (isSupportLocalStorage()) {
        if (localStorage.getItem("walletConnected") === "1") {
          await handleConnectWallet();
        }
      }

      window.addEventListener("scroll", handleScroll);
    });

    onUnmounted(() => {
      // console.log("onUnmounted");
      window.removeEventListener("scroll", handleScroll);
    });

    // expose to template and other options API hooks
    return {
      onConnect,
      connected,
      web3,
      userAddress,
      chainId,
      networkId,
      resetApp,
      assets,
      getAccountAssets,
      handleConnectWallet,
      isConnectedCorrectly,

      isScrolled,
      handleScrollToHash,
      anchor_masthead, anchor_about, anchor_story, anchor_nft, anchor_roadmap, anchor_faq,
      header, btn_menu,
      isMenuActive,
      handleMenu,

      collectionItems,
      FAQS,

      mintStatus,
      mint_fee,
      mint_fee_eth,
      handleMint,
      isMinting,
    }
  },
}
</script>

<style scoped lang="scss">
@import "../assets/scss/main.scss";
</style>
