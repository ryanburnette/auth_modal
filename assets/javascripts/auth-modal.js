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

  proto.signin = function () {
    $modal.modal();
  };

  proto.hide = function () {
    hide();
  };

  AuthModal.create = AuthModal;

  init = function () {
    var modal
      ;

    modal = $.get('/auth-modal.html', function (data) {
      $modal = $(data);
    });
    modal.done(function () {
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
  
  $('.signin a').on('click', function (e) {
    e.preventDefault();
    a.signin();
  });
});