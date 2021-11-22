# carriage-eater
Yandex.Translate add-on for removing newline characters from the clipboard and then inserting the clipboard into the input window by pressing ```F5```.

## Programming part

Based on [Your first extension](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension).

Checking the performance of the add-on was carried out in [Firefox Browser Developer Edition](https://www.mozilla.org/en-US/firefox/developer/).
Firefox versions [Extended Support Release (ESR)](https://www.mozilla.org/firefox/organizations/), [Developer Edition](https://www.mozilla.org/firefox/developer/) and [Nightly](https://nightly.mozilla.org/) will allow you to bypass the add-on signing requirement if you change the parameter ```xpinstall.signatures.required``` to ```false``` in the Firefox configuration editor (```about:config``` page).
Or you can [sign add-on](https://habr.com/ru/post/355144/) yourself.

To install add-on download .zip file of the repository and drop it to ```about:addons``` page.