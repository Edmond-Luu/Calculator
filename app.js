let display = document.querySelector('#display');

let buttons = Array.from(document.querySelectorAll(".button"));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'C':
                display.innerText = "";
                break;
            case '←':
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText)
                }
                catch (e) {
                    display.innerText = "Error!"
                    break;
                }
                break;
            default:
                if (display.innerText === "Error!") {
                    display.innerText = "";
                }
                if (display.innerText.length < 18) {
                    display.innerText += e.target.innerText;
                }
        }

    })
})