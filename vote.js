function vote(){
    var name=document.getElementById("name").value;
    var age=document.getElementById("age").value;
    var Answer=document.getElementById("answer");


if (age>=18){
    answer.innerHTML=name + " is eligible"
}else {
    answer.innerHTML=name + " you are still a child"
    }
}