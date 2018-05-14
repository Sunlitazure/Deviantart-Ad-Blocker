# Deviantart-Ad-Blocker
This script is designed to aid an adblocker in completely removing devaintart's new anti-adblocker ads.

This scrip is made for Tampermonkey, I'm uncertain if Greasemonkey follows the same format. If it does then it should work there too.

## How to Use
### Adblock Filter
Just use this as a custom filter in adblock plus or ublock origin:
~~~
deviantart.com###block-notice > .block-notice > .banner-wrap

deviantart.com###block-notice > .block-notice
~~~
it should do the trick... for now.

## Tampermonkey script
If the above code has stopped working because they got wise you may try using the Tampermonkey script:
Once you have Tampermonkey installed in chrome click this link: https://github.com/Sunlitazure/Deviantart-Ad-Blocker/blob/master/daAdBlocker.user.js and click the `Raw` button

a Tampemonkey page should pop up with an install button. Click install.

Congrats, you should now be able to browse Deviantart annoyance free!
