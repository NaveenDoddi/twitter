

function like(){
    var color = document.getElementById("likebtn").style.backgroundColor
    if(color == "white"){

        document.getElementById("likebtn").style.backgroundColor="rgb(198, 41, 41)"
    }
    if(color == "rgb(198, 41, 41)"){
        document.getElementById("likebtn").style.backgroundColor="white"
    }   
}

function comment(){
    var input = document.createElement("input")
    var button = document.createElement("button")
    input.value="super"
    input.id="input"
    button.id="btn"
    button.innerHTML="send"
    document.getElementById("buttons").append(input,button)
    button.addEventListener("click",function run(){
        var input = document.getElementById("input").value
        document.getElementById("input").style.display="none"
        document.getElementById("btn").style.display="none"
        var para = document.createElement("span")
        // para.id="comments"
        para.innerText=input
        para.style.backgroundColor="rgb(209, 229, 236)"
        para.style.border="2px solid"
        para.style.padding="4px"
        para.style.borderRadius="5px"
        para.style.display="inline"
        document.getElementById("comments").append(para)
    
    })
    
}
function share(){

}
function del(){
    document.getElementById("img").style.display="none"
    
}

function delC(){
    document.getElementById("comments").style.visibility="hidden"


}
function defaulttheame(){
    let preDateTime = new Date();
    let newTime = preDateTime.toLocaleTimeString('EN');

    let hour = newTime.split(":")[0];

    let delAmPm = newTime.split(" ")[1];
    console.log(delAmPm)

    
    if(delAmPm=="PM"){
        if(hour==12){hour=0}
        hour=parseInt(hour)+12
        if(hour<18){
            document.body.style.backgroundColor="white"
        }else if(hour<=24){
            document.body.style.backgroundColor="black"
        }

    }else if(delAmPm=="AM"){
        if(hour==12){hour=0}
        if(hour<=6){
            document.body.style.backgroundColor="black"
        }else if(6>=hour){
            document.body.style.backgroundColor="white"
        } 
    }
}
function retweet(){
    var retweet=document.getElementById("plzget").innerHTML
    document.getElementById("table").append(retweet)
}
