# OpenAD vue demo V3.0

## vue3.0 + webpack5 + js + vant4

### Notice
    If you want to load our SDK by asynchronous methods

    #step1 --> open https://protocol.openad.network/sdkloader.js
    #step2 --> find window.openADSdkLoader.version = version,
                 find  window.openADSdkLoader.sdkURL = url,
                 find window.openADSdkLoader.sdkName = name;
    #step3 every time, before release your app, please check the three keys above.

    let res = await PromiseLoadScript({
        name: 'openADJsSDK',
        version: '3.0.4',
        url: 'https://bf2055756e.node.openad.network/js/sdk.v3.js',
        noCache: true,
    });
    if(res){
        // run your codes
    }
    

### Start Command
    npm run dev

### Build Command
    npm run build-test
    npm run build-uat
    npm run build-prod

### Special Notes
    Please do not arbitrarily change the relevant configurations of the build folder and config folder. Package the configuration and apply mandatory binding, and go through deep changes, customization, and optimization.

    Support multiple applications sharing the same project
    Support routing extension
    Support application extension
    Support package extension
    Support remote path
    Heavyweight applications that support three digit page counts
    Support more, waiting for you to discover


