# DOM Atomic 02: Hide Many Elements

## Questions

---

> How did you go about selecting the DOM elements to hide? Describe the "contract" for that function.

Based on the HTML of the page, I chose to hide the divs with the class name "hide_me", as those two divs contained the text that needed to be hidden. This function works when the variable button (which refers to the button on the page) is clicked (referring to the event "click".)

---

> Describe how you were able to hide each element. Were you able to do it as one operation, or did you use a loop of some kind? Describe the "contracts" that were utilized to accomplish your goal.

Each element is hidden by a for loop. Once the button has been clicked and the function has been intalized, the loop runs through the variable hide_divs, which is all divs with the class name "hide_me". For each run through the loop, it "displays" the style "none" for the "hide_me" div, which causes it to appear hidden on the page.