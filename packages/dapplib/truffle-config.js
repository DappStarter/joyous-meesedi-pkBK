require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy knock forward turtle crazy repeat night purpose grace cash equal gas'; 
let testAccounts = [
"0x0ea7792c4f2ad526b667f0c324b50232b8f6af3721dfa54889f3775be819ef9d",
"0x279df6476d57be634008ed75090f94e6fe89cc3f337aaa3e5c93e8fa5cc5a885",
"0xa8d617cbf2e0308e3df00483357718384774d0a0ca271749598ce1a372b9e19e",
"0xf784fdfab481f2ad9eb53947c48160dbe653e6cdebdc4b911941257f2693a8a7",
"0xfdaa045d2e8f5a002571dbc451a2542e0f0ac39ab2d13d8b716d14baae7cecbd",
"0x8b8484d981931a40a64bc6190aa9b8c4167da2550a8a69a0a0aa7e594d5c3a08",
"0x9c450a8f626316aa0f4716123a058d12228753c3c4ab0da180ece7ddd5a863c3",
"0x64bdb822691a20f9d880ae071c9bdd28af05f98e31eeec839b7d2962a3f7b858",
"0x64d7214fb3451adbe4ddadc96f5ba22b56fe1c28cf7db4c37cd01579b720df9d",
"0xfbeea82c85eb46c9cdbdfe5343b762e770acef6c725497bbf2d97b2fc5104665"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


