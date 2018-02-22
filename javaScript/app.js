function AddTodo(){
    var todoContent = document.getElementsByTagName("input")[0].value;
    document.getElementsByTagName("input")[0].value = '';
    var todoContainer = document.createElement("div");
    todoContainer.setAttribute("class","eachTodoContainer");
    var todoListContent = document.createElement("span");
    todoListContent.setAttribute("class","TodoContent");
    todoContent = document.createTextNode(todoContent);
    todoListContent.appendChild(todoContent);
    var EditIcon = document.createElement("span");
    EditIcon.setAttribute("class","glyphicon glyphicon-pencil");
    var deleteIcon = document.createElement("span");
    deleteIcon.setAttribute("class","glyphicon glyphicon-trash");
    todoContainer.appendChild(todoListContent);
    todoContainer.appendChild(EditIcon);
    todoContainer.appendChild(deleteIcon);
    document.getElementById("mainContainer").appendChild(todoContainer);
 
    var close = document.getElementsByClassName("glyphicon-trash");
    var i;
    for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
       }
    }

    var edit = document.getElementsByClassName("glyphicon-pencil");
    var i;
    for (i = 0; i < edit.length; i++) {
    edit[i].onclick = function() {
        document.getElementsByClassName("EditCover")[0].style.display ="block";
        document.getElementsByClassName("EditContainer")[0].setAttribute("id","EditAnimation");     
        var newedit = this.parentElement;
        var editElement = newedit.childNodes[0].innerText;
        saveEditElement = newedit.childNodes[0];
        document.getElementsByTagName("textarea")[0].value = editElement;
        }
    }
}
function cancelEdit(){
    document.getElementsByClassName("EditCover")[0].style.display ="none";
    document.getElementsByClassName("EditContainer")[0].setAttribute("id","EditAnimation1");     
}
function Edit(){
     var editContent = document.getElementsByTagName("textarea")[0].value;
     editElement = editContent;
     console.log(editElement);
     console.log(editContent);
     saveEditElement.innerText=editContent;
     document.getElementsByClassName("EditCover")[0].style.display ="none";
     document.getElementsByClassName("EditContainer")[0].setAttribute("id","EditAnimation1");
}
function clearAll(){
    var mainCon = document.getElementById("mainContainer").innerText="";
}