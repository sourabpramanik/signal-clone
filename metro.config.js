const exclusionList  = require('metro-config/src/defaults/blacklist');

module.exports = {
  resolver: {
    blacklistRE: exclusionList([/amplify\/#current-cloud-backend\/.*/]),
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};