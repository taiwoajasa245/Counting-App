// initial variable to be 0 
let count = 0;

// General  variable 

let saveEl = document.querySelector('#demo');
let num = document.querySelector(".num"); 

// revolking  the onclick fuction 

function myIncrement(){ 
    let num = document.querySelector(".num"); 
    // adding one after every click
    count += 1; 
    num.innerText = count;  
}

function save(){ 

   saveEl.textContent += ` --${count}--`; 
    // setting the orginal value to 0 

    count = 0; 
    num.innerText = 0; 
}

function myDelete() {
    count -= 1; 
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


