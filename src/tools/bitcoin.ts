
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

  public getQRCode(address) {
    const uri = `https://blockchain.info/qr?data=${address}`;

    return uri;
  }

  public decode(secret) {
    const keyPair = bitcoin.ECPair.fromWIF(secret);
    const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey });

    return address;
  }
}
