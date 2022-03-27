//Check out calculator_hints.js for hints if you're stuck
let total = 0;
let display = '0';
let operator = null;

/*  FUNC DESCRIPTION: Operator calculations. Create the in +, x, -, and ÷ operator calculations. The plus operator is done for you!
    Uncomment and fill in the blank spaces. */
function calculations() {
    const intBuffer = parseInt(display); // Hint: Use parseInt to convert string to integer
    if (operator === '+') {
        total += intBuffer;
    } else if (operator === '-') {
        total -= intBuffer;
    } else if (operator === 'x') {
        total *= intBuffer;
    } else if (operator === '÷') {
        total /= intBuffer;
    }
}

/*   FUNC DESCRIPTION: If user input is a number, create the function. */
function makesNumber(value) {
    if (display === '0') {
        display = value.toString();
    } else {
    /*  If display is not 0, meaning there is a previous number typed in already, what should we display on the screen?
    Hint: How do we concatenate strings? If you are stuck, imagine typing in a '5' into the calculator, making display into '5'. 
    Then imagine typing '3' into the calculator. Now '3' is value and display is still at '5', so display will now be 53.  */
        display = display + value.toString();
    }
}

/*  FUNC DESCRIPTION: If user input is not a number, create the function. Create the functionality for 'C', '←', '=', and operators. */

function makesSymbol(symbol) {
    //make functionality for symbol C
    //make functionality for symbol ← Hint: .substring might be helpful! 
    //make functionality for symbol = Hint: use operator variable. Also call a function we created already!

    if (symbol === 'C') {
        total = 0;
        display = '0';
        operator = null;
    } else if (symbol === '←') {
        if (display === '0') {
            return;
        } else if (display.length == 1) {
            display = '0';
        } else {
            display = display.substring(0, display.length - 1);
        }
    } else if (symbol === '=') { //make functionality if symbol is an operator
        calculations();
        display = total.toString();
        total = 0;
        operator = null;
    } else {
        const intBuffer = parseInt(display);
        if (total === 0) {
            total = intBuffer;
        } else {
            calculations();
        }
        operator = symbol;
        display = '0'; //stay consistent
    }
}

/*  FUNC DESCRIPTION: Write the function to set listeners. This is how we will make the HTML interactive with the JS!
    This is where we sense when a user clicks a certain button and send this information to our buttonClicked function. */
function setListeners() {
//Hint: We want to select all buttons from html and make it so that something happens when you click on the buttons! querySelectorAll might be helpful
    let buttons = document.querySelectorAll('.buttons'); 
    for (item of buttons) {
        console.log(item);
        item.addEventListener('click', function(event) {
            buttonClicked(event.target.innerText);
        })
    //Hint: addEventListener might be useful.
    //Hint: event.target.innerText might be helpful. innerText return type is a string
    }
}

//Make sure to call setListeners!!!
setListeners();

/*  FUNC DESCRIPTION: Now we will write the function that takes care of when a button is clicked. */
function buttonClicked(valueClicked) {
    if (isNaN(parseInt(valueClicked))) { //NaN means 'Not a Number'
        makesSymbol(valueClicked);
    } else {
        makesNumber(valueClicked);
    }
    document.querySelector('.result-screen').innerText = display;
// Hint: we need to change what number appears on the screen! to change html, one listener you could use is querySelector
}