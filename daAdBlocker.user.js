// ==UserScript==
// @name       daAdBlocker
// @version    1.0.0
// @description  blocks stupid ads on deviantart
// @match      *.deviantart.com/*
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

$(document).ready(function() {
    setTimeout( function() {
        $('.block-notice').css('display', 'none');
    }, 1000);
});

