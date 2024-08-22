let inputfield = document.getElementById("inputtext");
let listContainer = document.getElementById("list-container");

function tasks(){
    if(inputfield.value === ""){
        alert("Please Enter Something!!");
    }else{
        let li  = document.createElement("li");
        li.innerHTML = inputfield.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        let img = document.createElement("img");
        img.src="close.svg";
        span.appendChild(img);
        li.appendChild(span);
    }
    inputfield.value="";
    savedata()
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata()
    }
    else if(e.target.tagName === "IMG"){
        e.target.parentElement.parentElement.remove();
        savedata()
    }
},false)


function savedata(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showdata(){
    listContainer.innerHTML=localStorage.getItem("data");
}

showdata();