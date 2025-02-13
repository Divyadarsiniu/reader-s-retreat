//create popup-overlay , popup-box,add-popup-button and set it as block
var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var btn=document.getElementById("add-popup-button")

btn.addEventListener("click",function(){
   
    popupoverlay.style.display="block"
    popupbox.style.display="block"
}
)
//cancel btn
var cancelpopup=document.querySelector(".cancel-popup")
cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})
//add btn with book-title-input,book-author-input,book-description-input
var container=document.querySelector(".container")
var addinput=document.getElementById("add-input")
var booktitleinput=document.getElementById("book-title-input")
var bookauthorinput=document.getElementById("book-author-input")
var bookdescriptioninput=document.getElementById("book-descrription-input")
//event listener
    container.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=` <h2>${booktitleinput.value}</h2>
            <h5>${bookauthorinput.value}</h5>
            <p> ${bookdescriptioninput.value}</p>
            <button onclick='deletebook(event)'>Delete</button>`
            container.append(div)
            popupoverlay.style.display="none"
            popupbox.style.display="none"
})

function deletebook(event){
    event.deletebook.parentElement.remove()
}
