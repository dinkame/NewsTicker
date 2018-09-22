//import './widget.scss';

import $, { isFunction } from 'jquery';
import Wix, {*} from 'wix';

addEventListener(Wix.Events.SETTINGS_UPDATED, Wix.onSettingsUpdate);
// You can get the style params programmatically, un-comment the following snippet to see how it works:
/*Wix.Styles.getStyleParams(style => {
 console.log(style);
 });*/

// You can also get the style every time it changes, try this:
/*Wix.addEventListener(Wix.Events.STYLE_PARAMS_CHANGE, style => {
 console.log(style);
 });*/

function onSettingsUpdate(update) {
    update = stringify(update);
    $('.sample-settings-title').show();
    $('.json').html(update);
    updateCompHeight();
}

function updateCompHeight(height) {
    const desiredHeight = height || document.documentElement.scrollHeight;
    setHeight(desiredHeight);
}

function stringify(input) {
    try {
        return JSON.stringify(input, null, 4);
    } catch (err) {
        return input;
    }
}

$(document).ready(() => {
  $('.navtohome').click(() => {
    getSiteMap(pages => {
      navigateToPage(pages[0].pageId.substring(1));
    });
    console.log('navigated');
  });
});
