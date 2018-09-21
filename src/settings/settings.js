import './css/main.scss';
import './css/fontFace.scss';
import './css/animations.scss';
import './css/settings.scss';
import './css/support.scss';

import { Settings } from 'Wix';
import $, { isFunction } from 'jquery';


function onUpdate(key, value) {
  Settings.triggerSettingsUpdatedEvent({key: key, value: value});
}

function attachListeners() {
  $('[wix-ctrl]').each(function (index, element) {
    var $element = $(element);
    var ctrl = $element.getCtrl();
    if (isFunction(ctrl.onChange)) {
      ctrl.onChange(function (value) {
        onUpdate($element.attr('wix-param'), value);
      })
    }

    $('.support_email').getCtrl().setValidationFunction(function(email){
      return validateEmail(email);
    });

    $(sendButtonControl);
  });

function validateEmail(email) {
    let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email);
}

function validateMessage(){
  return $('.support_message').getCtrl().getValue().length > 5;
}

function sendButtonControl(){
  $('.support_message, .support_email').each(function(index, element){
    var ctrl = $(element).getCtrl();
    ctrl.onChange(function(){
      var button = $('.support_sendButton').getCtrl();
      if(validateEmail($('.support_email').getCtrl().getValue()) && validateMessage() && button.options.disabled){
        button.enable();
      }
      else{
        button.disable();
      }
    });
  });
}


  $('#main-cta').getCtrl().onClick(function () {
    console.log('This is your call-to-action, take it seriously');
  })
}

$(attachListeners);
