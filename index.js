


for(var i = 0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll('.drum')[i].addEventListener("click", function () {

        var buttonInn = this.innerHTML;

        makeSound(buttonInn);

        buttonanimation(buttonInn);
    })
}


document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonanimation(event.key);
});


function makeSound(buttonInn){
    if(buttonInn === "w"){
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
    }else if(buttonInn === "a"){
        var kick= new Audio('sounds/kick-bass.mp3');
        kick.play();
    }else if(buttonInn === "s"){
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
    }else if(buttonInn === "d"){
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
    }else if(buttonInn === "j"){
        var tom2= new Audio('sounds/tom-2.mp3');
        tom2.play();
    }else if(buttonInn === "k"){
        var tom3= new Audio('sounds/tom-3.mp3');
        tom3.play();
    }else if(buttonInn === "l"){
        var tom4= new Audio('sounds/tom-4.mp3');
        tom4.play();
    }
}



function buttonanimation(c_key){
    var activebtn = document.querySelector("." + c_key);
    activebtn.classList.add("pressed");

    setTimeout(function (){
        activebtn.classList.remove("pressed");
    }, 100)


}




// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();


