
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