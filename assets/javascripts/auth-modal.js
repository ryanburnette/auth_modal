var AuthModal
  , a
  ;

jQuery(document).ready(function($) {
  'use strict';

  var proto
    , init
    , hide
    , $modal
    ;

  AuthModal = function () {
    if ( !(this instanceof AuthModal) ) {
      $modal = init();
      return new AuthModal();
    }
  };

  proto = AuthModal.prototype;

  proto.login = function () {
    $modal.modal();
  };

  proto.hide = function () {
    hide();
  };

  AuthModal.create = AuthModal;

  init = function () {
    $.get('/auth-modal.html', function (data) {
      $modal = $(data);
      $modal.find('.close').on('click', function () {
        hide();
      });
      $modal.prependTo('body');
    });
  };

  hide = function () {
    $modal.modal('hide');
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
  };
});

jQuery(document).ready(function($) {
  a = AuthModal.create();
  
  $('.login a').on('click', function (e) {
    e.preventDefault();
    a.login();
  });
});