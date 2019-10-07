
import '../../shim';
const bitcoin = require('bitcoinjs-lib');

export default class BitcoinGenerate {

  public generateNewAddress() {
    const keyPair = bitcoin.ECPair.makeRandom();

    const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey });
    const secret = keyPair.toWIF();

    return {
      publicKey: address,
      privateKey: secret,
    };
  }

  public importWallet(secret) {
    const keyPair = bitcoin.ECPair.fromWIF(secret);
    const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey });

    return {
      publicKey: address,
      privateKey: secret,
    };
  }

  public getQRCode(address) {
    const uri = `https://blockchain.info/qr?data=${address}`;

    return uri;
  }

  // public getInfo(address) {
  //   const uri = `https://blockchain.info/rawaddr/${address}`;

  //   return fetch(uri)
  //     .then((response) => response.json())
  //     .then((responseJson) => ({ 
  //       balance: responseJson.final_balance
  //     }));
  // }

  async getInfo (address) {
    const uri = `https://blockchain.info/rawaddr/${address}`;
    const response = await fetch(uri);
    const responseJson = await response.json();
console.log('in', responseJson);
    return {
      balance: responseJson.final_balance,
      unit: 'BTC',
    }
  }
}
