








 document.body.style.backgroundColor = "#82adac";
 document.body.style.textAlign = 'center';

var numOfQuotes = document.querySelectorAll(".quotes").length;


// now i will create a forLoop and add the return variable numOfQuotes value.
// then we will increment the value of "i" by 1 each time until the specified numOfQuotes is met.

for (var i = 0; i < numOfQuotes; i++) {


    //every time it loops through the forLoop code the number in the array will be added by 1 (  i++  ) so we will pass "i" in for the value of the array so it adds by 1 every time it forLoops until the end of the class .drum.
    document.querySelectorAll(".quotes")[i].addEventListener("click", function () {
        
        var buttonInnerHTML = this.innerHTML;

        switch (buttonInnerHTML) {
            case "Chris Farley":
                var cheese = new Audio("sounds/cheese.mp3"); 
                cheese.play();
                break;
                
                case "Eddie Murphy":
                var murphy = new Audio('sounds/murphy.mp3'); 
                murphy.play();
                break;

                case "George Carlin":
                var carlin = new Audio('sounds/carlin.mp3'); 
                carlin.play();
                break;

                case "Will Ferrell":
                var will = new Audio('sounds/will.mp3'); 
                will.play();
                break;

                case "Katt Williams":
                var katt = new Audio('sounds/katt.mp3'); 
                katt.play();
                break;

                case "Dave Chappelle":
                var dave = new Audio('sounds/dave.mp3'); 
                dave.play();
                break;

                case "Robin Williams":
                var robin = new Audio('sounds/robin.mp3'); 
                robin.play();
                break;
                
                default:console.log(buttonInnerHTML);
                
        }
        
       
    
    });

    


} 



