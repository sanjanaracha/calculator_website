let input = document.getElementById('textArea');
let buttons = document.querySelectorAll('button');

let string = "";   //for storing the operands and operators
let arr = Array.from(buttons); //for storing the buttons in an array
arr.forEach(button => {
    button.addEventListener('click', (e) =>{ //for each buttons,adding event listener
        if(e.target.innerHTML == '='){  
            try {
                string = eval(string);  //performing operations(+,-,*,/,%)
                input.value = string;   //adding value to the textArea
            } catch (error) {
                input.value = "Error";  //exception block
                string = "";
            }
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";          //clearing the string
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1); //for deleting last character
            input.value = string;
        }
        else if(e.target.innerHTML == '^'){  
            string = string+"**"   //for squaring the number
            input.value = string;
        }
        else if(e.target.innerHTML == 'x'){
            string = string+ "*"  //for multiplication
            input.value= string;

        }
        else{
            string += e.target.innerHTML; //for adding numbers and operators
            input.value = string;
        }
    })
})
