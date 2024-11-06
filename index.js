
// synatx => addEventListener(type,listener)

// basically listener me koi funtion ka name ayega , but funtion me parentheses nhi lagana because if we put parentheses in function name ,then this is a straight-up method call, and it will call that function( mean this funtion run as soon as we load the website)  


// To achive the goal we use brute force 

// let drumOne = document.getElementsByClassName('drum')[0].addEventListener('click',drumOneSound);
// function drumOneSound(){
//     var audio = new Audio('./sounds/tom-1.mp3')
//     audio.play();
// }

// let drumTwo = document.getElementsByClassName('drum')[1].addEventListener('click',drumTwoSound);
// function drumTwoSound(){
//     var audio = new Audio('./sounds/tom-2.mp3')
//     audio.play();
// }

// let drumThree = document.getElementsByClassName('drum')[2].addEventListener('click',drumThreeSound);
// function drumThreeSound(){
//     var audio = new Audio('./sounds/tom-3.mp3')
//     audio.play();
// }

// let drumFour = document.getElementsByClassName('drum')[3].addEventListener('click',drumFourSound);
// function drumFourSound(){
//     var audio = new Audio('./sounds/tom-4.mp3')
//     audio.play();
// }

// let drumFive = document.getElementsByClassName('drum')[4].addEventListener('click',drumFiveSound);
// function drumFiveSound(){
//     var audio = new Audio('./sounds/crash.mp3')
//     audio.play();
// }

// let drumSix = document.getElementsByClassName('drum')[5].addEventListener('click',drumSixSound);
// function drumSixSound(){
//     var audio = new Audio('./sounds/kick-bass.mp3')
//     audio.play();
// }

// let drumSeven = document.getElementsByClassName('drum')[6].addEventListener('click',drumSevenSound);
// function drumSevenSound(){
//     var audio = new Audio('./sounds/snare.mp3')
//     audio.play();
// }


// detecting button press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener('click', function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);  
        
        buttonAnimation(buttonInnerHTML);
    });
}

//detecting keyboard press

document.addEventListener("keypress",function(event){
    makeSound(event.key);

    buttonAnimation(event.key);
});

// function
function makeSound(keyboard){
    switch (keyboard) {
        case "w":
            var audio = new Audio('./sounds/tom-1.mp3')
            audio.play();
            break;

        case "a":
            var audio = new Audio('./sounds/tom-2.mp3')
            audio.play();
            break;

        case "s":
            var audio = new Audio('./sounds/tom-3.mp3')
            audio.play();
            break;

        case "d":
            var audio = new Audio('./sounds/tom-4.mp3')
            audio.play();
            break;

        case "j":
            var audio = new Audio('./sounds/crash.mp3')
            audio.play();
            break;

        case "k":
            var audio = new Audio('./sounds/kick-bass.mp3')
            audio.play();
            break;

        case "l":
            var audio = new Audio('./sounds/snare.mp3')
            audio.play();
            break;
        default:
            break;
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    //window set time method
    //synatx = setTimeout(function, millisecond,parameter)
    // parameter = optional. additional parameter to pass to the function

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    } , 200 );
}