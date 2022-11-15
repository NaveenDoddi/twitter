

function like1(){
    var color = document.getElementById("likebtn1").style.backgroundColor
    if(color == "white"){

        document.getElementById("likebtn1").style.backgroundColor="rgb(198, 41, 41)"
    }
    if(color == "rgb(198, 41, 41)"){
        document.getElementById("likebtn1").style.backgroundColor="white"
    }   
}

function comment1(){
    var input = document.createElement("input")
    var button = document.createElement("button")
    // input.value="super"
    input.id="input"
    button.id="btn"
    button.innerHTML="send"

    document.getElementById("buttonsgrp1").append(input,button)
    button.addEventListener("click",function run(){
        var input = document.getElementById("input").value
        if(input==""){}else{
            var para = document.createElement("span")
            // para.id="comments"
            para.innerText=input
            para.style.backgroundColor="rgb(209, 229, 236)"
            para.style.border="1px solid"
            // para.style.padding="0%"
            para.style.borderRadius="5px"
            para.style.display="inline"
            document.getElementById("comments1").append(para)
        }
        
        document.getElementById("input").remove()
        document.getElementById("btn").remove()
    
    })
    
}


function share1(){

}
function hide1(){
    document.getElementById("image").style.display="none"
    
}
function unhide1(){
    document.getElementById("image").style.display="block"
    
}

function delC1(){
    document.getElementById("comments1").style.visibility="hidden"
}

// for second coloumn
function like2(){
    var color = document.getElementById("likebtn2").style.backgroundColor
    if(color == "white"){

        document.getElementById("likebtn2").style.backgroundColor="rgb(198, 41, 41)"
    }
    if(color == "rgb(198, 41, 41)"){
        document.getElementById("likebtn2").style.backgroundColor="white"
    }   
}

function comment2(){
    var input = document.createElement("input")
    var button = document.createElement("button")
    // input.value="super"
    input.id="input"
    button.id="btn"
    button.innerHTML="send"
    document.getElementById("buttonsgrp2").append(input,button)
    button.addEventListener("click",function run(){
        var input = document.getElementById("input").value
        if(input==""){}else{
            var para = document.createElement("span")
            // para.id="comments"
            para.innerText=input
            para.style.backgroundColor="rgb(209, 229, 236)"
            para.style.border="2px solid"
            para.style.borderRadius="5px"
            para.style.display="inline"
            document.getElementById("comments2").append(para)
        }
        
        document.getElementById("input").remove()
        document.getElementById("btn").remove()
    
    })
    
}


function share2(){

}
function hide2(){
    document.getElementById("para").style.display="none"
    
}
function unhide2(){
    document.getElementById("para").style.display="block"
    
}

function delC2(){
    document.getElementById("comments2").style.visibility="hidden"
}
// for the third column
function like3(){
    var color = document.getElementById("likebtn3").style.backgroundColor
    if(color == "white"){

        document.getElementById("likebtn3").style.backgroundColor="rgb(198, 41, 41)"
    }
    if(color == "rgb(198, 41, 41)"){
        document.getElementById("likebtn3").style.backgroundColor="white"
    }   
}

function comment3(){
    var input = document.createElement("input")
    var button = document.createElement("button")
    // input.value="super"
    input.id="input"
    button.id="btn"
    button.innerHTML="send"
    document.getElementById("buttonsgrp3").append(input,button)
    button.addEventListener("click",function run(){
        var input = document.getElementById("input").value
        if(input==""){}else{
            var para = document.createElement("span")
            // para.id="comments"
            para.innerText=input
            para.style.backgroundColor="rgb(209, 229, 236)"
            para.style.border="2px solid"
            para.style.borderRadius="5px"
            para.style.display="inline"
            document.getElementById("comments3").append(para)
        }
        document.getElementById("input").remove()
        document.getElementById("btn").remove()
    
    })
    
}


function share3(){

}
function hide3(){
    document.getElementById("vedio").style.display="none"
    
}
function unhide3(){
    document.getElementById("vedio").style.display="block"
    
}

function delC3(){
    document.getElementById("comments3").style.visibility="hidden"
}

function theame(){
    let preDateTime = new Date();
    let newTime = preDateTime.toLocaleTimeString('EN');
    let hour = newTime.split(":")[0];
    let delAmPm = newTime.split(" ")[1];

    if(delAmPm=="PM"){
        if(hour==12){hour=0}
        hour=parseInt(hour)+12
        if(hour<18){
            document.body.style.backgroundColor="white"
        }else if(hour<=24){
            document.body.style.backgroundColor="black"
            document.getElementById("span1").style.color="white"
            document.getElementById("span2").style.color="white"
            document.getElementById("span3").style.color="white"
            document.getElementById('para').style.color="white"

        }
    }else if(delAmPm=="AM"){
        if(hour==12){hour=0}
        if(hour<=6){
            document.body.style.backgroundColor="black"
            document.getElementById("span1").style.color="white"
            document.getElementById("span2").style.color="white"
            document.getElementById("span3").style.color="white"

        }else if(6>=hour){
            document.body.style.backgroundColor="white"
        } 
    }
}
// function retweet(){
//     var retweet=document.getElementById("plzget").innerHTML
//     document.getElementById("table").append(retweet)
// }
