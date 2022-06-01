export const CORRECT_CHAIN_IDS = ["1", "0x1"];

export const CORRECT_CHAIN_PARAMS = [
	{
		chainId: "0x1",
		chainName: "Ethereum Mainnet",
		rpcUrls: ["https://mainnet.infura.io/v3/"],
		nativeCurrency: {
			name: "ETH",
			symbol: "ETH",
			decimals: 18,
		},
		blockExplorerUrls: ["https://etherscan.io"],
	},
];

export const TX_EXPLORER_URL = "https://etherscan.io";

// export const CORRECT_CHAIN_IDS = ["4", "0x4"];

// export const CORRECT_CHAIN_PARAMS = [
// 	{
// 		chainId: "0x4",
// 		chainName: "Rinkeby Test Network",
// 		rpcUrls: ["https://rinkeby.infura.io/v3/"],
// 		nativeCurrency: {
// 			name: "ETH",
// 			symbol: "ETH",
// 			decimals: 18,
// 		},
// 		blockExplorerUrls: ["https://rinkeby.etherscan.io"],
// 	},
// ];

// export const TX_EXPLORER_URL = "https://rinkeby.etherscan.io";

let arr = [];
for (let i = 1; i <= 20; i++) {
	arr.push(
		{
			id: i,
			name: `NFT item ${i}`,
			image: `item.webp`,
			sold: false,
		}
	);
}

export const COLLECTION_ITEMS = arr;

export const FAQS = [
	{
		q: `What are XXXX?`,
		a: `XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`
	},
	{
		q: `What's the collection size?`,
		a: `XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`
	},
	{
		q: `What's the mint price?`,
		a: `XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`
	},
	{
		q: `When's the mint date?`,
		a: `XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`
	},
	{
		q: `How to buy XXXX?`,
		a: `XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`
	},
];
