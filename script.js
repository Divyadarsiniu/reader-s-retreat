//create popup-overlay , popup-box,add-popup-button and set it as block
document.addEventListener("DOMContentLoaded",function(){
    var popupoverlay=document.querySelector(".popup-overlay")
    var popupbox=document.querySelector(".popup-box")
    var btn=document.getElementById("add-popup-button")
    
    btn.addEventListener("click",function(){
       
        popupoverlay.style.display="block"
        popupbox.style.display="block"
    })
    //cancel btn
var cancelpopup=document.getElementById("cancel-popup")
cancelpopup.addEventListener("click",function(event){
    event.preventDefault()

    popupoverlay.style.display="none"
    popupbox.style.display="none"

})
//add btn with book-title-input,book-author-input,book-description-input


var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktitleinput=document.getElementById("book-title-input")
var bookauthorinput=document.getElementById("book-author-input")
var bookdescriptioninput=document.getElementById("book-description-input")


//event listener


    addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")

    div.innerHTML=` <h2>${booktitleinput.value}</h2>
            <h5>${bookauthorinput.value}</h5>
            <p> ${bookdescriptioninput.value}</p>
            <button class="delete-book">Delete</button>`
            
            container.append(div)
            popupoverlay.style.display="none"
            popupbox.style.display="none"

            // Clear input fields after adding the book
        booktitleinput.value = "";
        bookauthorinput.value = "";
        bookdescriptioninput.value = "";
})
container.addEventListener("click",function(event){
    if(event.target && event.target.classList.contains("delete-book")){
        event.target.parentElement.remove()
    }
})
})


