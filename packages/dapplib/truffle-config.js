require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture oppose bottom tooth notice crime remain hour grace inflict surround tuition'; 
let testAccounts = [
"0xf73f7c8d2b8922f4a5bc39546bae7c5f6d914a116986c926ae2e584a89bc4845",
"0x4a990a0db782e4a7171d16cddbb6230d665012570172f341cc17b2196342988c",
"0x54f5fbcb89c2a33b0555a1c08c287009921af39b04fdaa0d158a2a9694153818",
"0xedf2232dcded7ddb3a2a75952dcbb9c6a25c3f2232a41f541d80d536b7a1ccc2",
"0xecb0fc4d28a80a38cb6e14d22968e28192d3af46f36ee8c0c5dfe2259f9d9c16",
"0x22d295e40e5748fd88b5a11a7dc68b3d94702b9aa4cb51085e5a04841599b123",
"0x8612d11f04b77e11fc878ec98321c71add2a6af7a90fcf856dea0d2dcb6cffd2",
"0xf74ea12c13c47bc58749268478c78c6b1c0a5d7c312fc62026288271aefced78",
"0xa4a484a0b3e457040d93f9378040053cc2ff989e82b750bea021708e370451bd",
"0xff16598375495b7f238c0144e29a37a9f4574ecfa2b806a3ec69b02e76df38e9"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

