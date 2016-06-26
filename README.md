# Deviantart-Ad-Blocker
This script is designed to aid an adblocker in completely removing devaintart's new anti-adblocker ads.

This scrip is made for Tampermonkey, I'm uncertain if Greasemonkey follows the same format. If it does then it should work there too.

##How to Use
### Adblock Filter
In Ublock origin add `! 6/14/2016, 6:33:56 PM deviantart.com
||st.deviantart.net/roses/jsmin/pages/browse.js$script,domain=deviantart.com/art/*` to the custom filter list. Change the date to your current date if you want. You may also be able to use this in other adblockers. Check to see what format your adblocker uses and see if you can use it or adjust it to work in your adblocker.

####What it does
This code is designed to block the script `st.deviantart.net/roses/jsmin/pages/browse.js$script`, which is at least partially responsible for the anti-adblock ads, on page that matches the url `deviantart.com/art/`. This means the script is only disabled on deviation pages. I have noticed anti-adblock ads on only two page types so far `/art/` and `/browse/`. We don't want to block the script on `/browse/` though because it does more than make the ad. I haven't seen it have any effect on `/art/` pages yet but blocking it on `/browse/` pages disables the infinite scroll features. To fix that we're going to use Tampermonkey to block the ad there instead.

##Tampermonkey script
