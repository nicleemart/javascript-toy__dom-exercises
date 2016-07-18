# DOM Atomic 01: Show One Element

## Questions

---

> If you click the link to reveal more text and then refresh the page, does the text remain revealed, or is it hidden again? Why?

If you refresh the page after you click the link, the text that was revealed becomes hidden again because the script has not ran yet. The script only runs when the event "click" takes place to the variable more_link.

---

> Remove `window.addEventListener("load", function(){` (and the closing `})`) from **global.js**. Does the link still reveal the text? What is the purpose of this code that you've removed?

Removing `window.addEventListener("load", function(){` does not allow the link to reveal the text because that script is telling the rest of the script that it can be run when the window has finished loading. 

---

> Describe the "contract" for `addEventListener`.

`addEventListener` works between an object, known as an event target in this case, which receives the event, and a listener, which "listens" for an event so that it can perform its specific function, such as load or click.