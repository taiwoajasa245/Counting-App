// initial variable to be 0 
let count = 0;

// General  variable 

let saveEl = document.querySelector('#demo');
let num = document.querySelector(".num"); 

// revolking  the onclick fuction 

function myIncrement(){ 
    let num = document.querySelector(".num"); 
    // adding one after every click
    count++; 
    num.innerText = count;  
}

function save(){ 

   saveEl.textContent += ` --${count}--`; 
    // setting the orginal value to 0 

    count = 0; 
    num.innerText = 0; 
}
function startTimer(){
    const timeLimit = document.getElementById("timer-input").value; 

    // convert the time limit ot seconds 

    const timeLimitInSeconds = timeLimit * 30; 

    // set the initial timer value
    let timeRemaining = timeLimitInSeconds; 



    //update the timer display every second
    const timerInterval = setInterval( () => { 
        // decrement the time remaining by one second 
        timeRemaining--; 

        // update the timer display 
        const time = document.getElementById("timer-display");

        time.innerHTML = `Time Remaining: ${timeRemaining} seconds`; 

        // set the color of the timer when it is in 29
        
        if (timeRemaining < 30) {
            time.style.color = "green"; 
        }
        
        // set the color of the timer when reached 20 
        if (timeRemaining < 21) {
            time.style.color = "yellow"; 
        }
        
        if (timeRemaining < 11) {
            time.style.color = "red"; 
           
        }
    
        // if the time remaining is zero , clear the interval and stop the timer
        if (timeRemaining === 0){ 
            clearInterval(timerInterval); 
            save()
            alert("Time is Over"); 
        }

    }, 1000); 

}; 

const timerForm = document.getElementById('timer-form');
timerForm.addEventListener('submit', e => { 
    e.preventDefault(); 
    startTimer(); 
}); 

function myDelete() {
    count--; 
    num.textContent = count;
    let i = count; 
    // making sure the result is a positive value
    if (i < 0) {
        count = 0; 
        num.innerText = 0; 
    } 
}

function myNumber2(){ 

    
        let num = document.querySelector(".num"); 
        // adding one after every click
        count += 2; 
        num.innerText = count;  
    
}

function myNumber3(){ 

    
    let num = document.querySelector(".num"); 
    // adding one after every click
    count += 3; 
    num.innerText = count;  

}
function myNumber4(){ 

    
    let num = document.querySelector(".num"); 
    // adding one after every click
    count += 4; 
    num.innerText = count;  

}
function myNumber5(){ 

    
    let num = document.querySelector(".num"); 
    // adding one after every click
    count += 5; 
    num.innerText = count;  

}
function myNumber6(){ 

    
    let num = document.querySelector(".num"); 
    // adding one after every click
    count += 6; 
    num.innerText = count;  

}
function myNumber7(){ 

    
    let num = document.querySelector(".num"); 
    // adding one after every click
    count += 7; 
    num.innerText = count;  

}
function myNumber8(){ 

    
    let num = document.querySelector(".num"); 
    // adding one after every click
    count += 8; 
    num.innerText = count;  

}
function myNumber9(){ 

    
    let num = document.querySelector(".num"); 
    // adding one after every click
    count += 9; 
    num.innerText = count;  

}
function myNumber10(){ 

    
    let num = document.querySelector(".num"); 
    // adding one after every click
    count += 10; 
    num.innerText = count;  

}


