
import '../../../shim';
const bitcoin = require('bitcoinjs-lib');

export default class BitcoinGenerate {

  public generateNewAddress() {
    const keyPair = bitcoin.ECPair.makeRandom();

    const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey })

    console.log('ad', address);
    return {
      publicKey: keyPair.publicKey,
      privateKey: keyPair.privateKey,
    };
  }

  public decodeKey(key) {
    return key;
  }

}