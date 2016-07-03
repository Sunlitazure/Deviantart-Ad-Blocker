// ==UserScript==
// @name       daAdBlocker
// @version    1.0.1
// @description  blocks stupid ads on deviantart
// @match      *.deviantart.com/*
// @require http://code.jquery.com/jquery-latest.js
// @downloadURL https://github.com/Sunlitazure/Deviantart-Ad-Blocker/blob/master/daAdBlocker.user.js
// ==/UserScript==

$(document).ready(function() {
    setTimeout( function() {
        $('.block-notice').css('display', 'none');
    }, 100);
});

