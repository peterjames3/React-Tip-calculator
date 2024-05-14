# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
 
- [Author](#author)


**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![Screenshot](./src/assets/Screenshot%20from%202024-05-14%2010-16-45.png)

 


### Built with

- Semantic HTML5 markup
- CSS custom properties
- React
- Tailwindcss Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library


### What I learned

Use this section to recap over some of your major learnings while working through this project:
validating form using react
controlled  and uncontrolled input



To see how you can add code snippets, see below:

```javascript

  const handleBillInput = (e) => {
    const value = parseFloat(e.target.value);
    if (isNaN(value) || value <= 0) {
      setBillError("Can't be zero");
      setBill(0);
    } else {
      setBill(value);
      setBillError("");
    }
  };

  const handleCustomTipFocus = (e) => {
    if (e.target.value === "Custom") {
      setCustomTip("");
    }
  };

  const handleCustomTipBlur = (e) => {
    if (e.target.value.trim() === "") {
      setCustomTip("Custom");
      setTipPercent(0); 
    }
  };

  const handleCustomTipChange = (e) => {
    const value = parseFloat(e.target.value);
    if (isNaN(value) || value <= 0) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setCustomTip("Custom");
      }, 300);
    } else {
      setCustomTip(value.toString());
      setTipPercent(value); 
    }
  };

  const handleTipClick = (percent) => {
    setTipPercent(percent);
    setCustomTip(""); 
  };

  const handlePersonInput = (e) => {
    const value = parseInt(e.target.value);
    if (isNaN(value) || value < 1) {
      setError("Can't be zero");
      setNumPeople(5); 
    } else {
      setNumPeople(value);
      setError("");
    }
  };

  const calculateTipPerPerson = () => {
    if (numPeople > 0 && bill > 0) {
      const tipAmount = (bill * (tipPercent / 100)) / numPeople;
      return tipAmount.toFixed(2);
    }
    return "0.00";
  };

  const calculateTotalPerPerson = () => {
    if (numPeople > 0 && bill > 0) {
      const tipAmount = parseFloat(calculateTipPerPerson());
      const total = (bill / numPeople) + tipAmount;
      return total.toFixed(2);
    }
    return "0.00";
  };

  const tipPerPerson = calculateTipPerPerson();
  const totalPerPerson = calculateTotalPerPerson();

  const reset = () => {
    setBill(0);
    setTipPercent(0);
    setNumPeople(0);
    setCustomTip("Custom");
    setError("");
    setBillError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }
```

```html
  >
              Select Tip %
            </label>
            <div className="grid grid-cols-3 grid-rows-2 gap-4">
              <>
                {[5, 10, 15, 25, 50].map((percent) => (
                  <button
                    key={percent}
                    className="rounded-lg text-center text-2xl font-bold bg-VerydarkCyan text-white py-3 hover:text-DarkGrayishCyan hover:cursor-pointer hover:bg-LightGrayishCyan transition-all delay-300"
                    onClick={() => handleTipClick(percent)}
                  >
                    {percent}%
                  </button>
                ))}

                <input
                  type="text"
                  value={customTip}
                  onChange={handleCustomTipChange}
                  onFocus={handleCustomTipFocus}
                  onBlur={handleCustomTipBlur}
                  name="customTip"
                  id={id + "customTip"}
                  className="bg-transparent font-semibold pr-2 outline-none text-DarkGrayishCyan text-end bg-veryLightGrayishCyan text-2xl font-SpaceMono hover:border hover:border-Strongcyan transition-all delay-300 rounded-lg"
                 
                  
                />
              </>
            </div>
```

## Author
- Website - [Hanzo](https://664313bb82395faa37815bbe--harmonious-fudge-12124e.netlify.app/)

- Frontend Mentor - [@Hanzo_q](https://www.frontendmentor.io/profile/Hanzo

- Twitter - [@Hanzo_q](https://www.twitter.com/@Hanzo_q)




