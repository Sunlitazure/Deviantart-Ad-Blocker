// ==UserScript==
// @name       DA ad blocker
// @version    0.0.1
// @description  blocks stupid ads on deviantart
// @match      www.deviantart.com/browse/*
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

$(document).ready(function() {
    setTimeout( function() {
        $('.block-notice').css('display', 'none');
    }, 1000);
});

