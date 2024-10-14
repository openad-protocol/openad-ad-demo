# OpenAD vue demo V3.0

## vue3.0 + webpack5 + js + vant4

### Notice
    If you don't want to use 'sdkloader.js' to load SDK, you should do the following steps:

    1. Open 'https://protocol.openad.network/sdkloader.js' in your browser;
	2. Find the path name 'sdk.v3.js', such as 'https://bf2055756e.node.openad.network/js/sdk.v3.js';
	3. Open 'https://bf2055756e.node.openad.network/js/sdk.v3.js' in your browser;
    4. Check the sdk version, and fill version info to the script attribute and V parameter;
    5. You can directly quote the following script:
    <script type="text/javascript" version="3.0.2" src="https://bf2055756e.node.openad.network/js/sdk.v3.js?v=3.0.2"></script>

	In order to ensure that you can get the latest version of the sdk, check the SDK URL and Version information before each release of your APP.
    

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


