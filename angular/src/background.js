// ============================= Router =========================================

var isLoadCustom = false;
// ==============================================================================
var OK = 'OK';
var ERROR = 'ERROR';

var isBlockAds = false;

// Init the variables from chrome locally
chrome.storage.sync.get(['isBlockAds'], items => {
  isBlockAds = items.isBlockAds;
});
