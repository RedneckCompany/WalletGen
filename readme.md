
# Wallet Gen

## Get started

`npm install && npm postinstall`

## ios

`cd ios && pod install`

## Android 

### First init of the project

in `android/app/`

> keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000


WARNING
The JKS keystore uses a proprietary format. It is recommended to migrate to PKCS12 which is an industry standard format using "keytool -importkeystore -srckeystore debug.keystore -destkeystore debug.keystore -deststoretype pkcs12".


## Troubleshooting

### general

1. for error : error: cannot find symbol variable TransitionManager. Run `npx jetify`in root project folder

### bitcoinjs-lib

`npm install bitcoinjs-lib@5.1.1 react-native-randombytes buffer`
`npm install --dev rn-nodeify`
`cd ios && pod install && cd ..`

postinstall to add to your script in package.json: 
> "postinstall": "rn-nodeify --install buffer,stream,assert,events,crypto,vm,process --hack"

then, `npm run postinstall`

NOTE: (If you receive an error about "shim.js" not existing just run yarn install again):

`npm install`

Uncomment require('crypto') at the bottom of "shim.js". Or add require('crypto') to the bottom of "shim.js" if it doesn't exist.

And finally, `npm install && cd ios && pod install && cd ..` one more time.

Using this gist to keep updated: https://gist.github.com/coreyphillips/4d45160fed016417a5f583f179c2cbdb