function setup(){
    var button = document.querySelector("#coolbutton");
    console.log(button);
    button.addEventListener("click", hello);
    var collapsible = document.querySelector(".intro")
    var collapsible2 = document.querySelector(".coolimages")
    function hello(){
        var show = "show"
        collapsible.classList.toggle(show)
        collapsible2.classList.toggle(show)
       }
    
    }


window.addEventListener("load", setup)