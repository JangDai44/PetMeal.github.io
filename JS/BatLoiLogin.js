
filterSelection("all");
function ktUser() {
    var user = document.getElementById("txtuser").value;
    var err = /^[A-Za-z]{6,32}$/;
    if (!err.test(user)) {
        document.getElementById("errUser").innerHTML = "Ten dang nhap toi da tu 6-32 ki tu va khong chua ki tu dac biet";
        return false;
    }
    else {
        document.getElementById("errUser").innerHTML = "";
        return true;
    }
}
function ktPass() {
    var mk = document.getElementById("txtpass").value;
    var err = /^[A-Za-z0-9]{6,32}$/;
    if (!err.test(mk)) {
        document.getElementById("errPass").innerHTML = "Ten dang nhap toi da tu 6-32 ki tu va khong chua ki tu dac biet";
        return false
    }
    else {
        document.getElementById("errPass").innerHTML = "";
        return true;
    }
}

function LogIn() {
    var username = document.getElementById("txtuser").value;
    var password = document.getElementById("txtpass").value;
    if (ktPass() == true && ktUser() == true) {
        $('#login').modal('hide');
        alert("Dang nhap thanh cong");
        document.getElementById("userName").innerHTML = "<span class='glyphicon glyphicon-user' style='color:#ecc62a'></span> " + username;
    }
    else {
        alert("Dang nhap khong thanh cong");
    }
}


//Chat
//#region
var boxchat = document.getElementsByClassName('boxchat-room')[0];
var inputchat = document.getElementsByClassName('inputchat')[0];
var roomchat = document.getElementsByClassName('roomchat')[0]
var arraymess = [

]
//Xu li an hien box
const showbox = ()=>{
    if(boxchat.hidden==true){
        console.log('show');
        boxchat.style.animationName = 'show';
        boxchat.hidden = false;
        boxchat.addEventListener('animationend',()=>{
            boxchat.hidden = false;
        })
    } else {
        console.log('hidden');
        boxchat.style.animationName = 'hidden';
        boxchat.addEventListener('animationend',()=>{
            boxchat.hidden = true;
        })
    }
}

//Xu li send mess
const sendmess=()=>{
    var temp = inputchat.value;
    arraymess.push({
        sender:'me',
        text:temp,
    })
    var messnew = arraymess[arraymess.length-1];
    if(messnew.sender=='me'&&messnew.text!=''){
        console.log('Add complete');
        var divmess = document.createElement('div');
        divmess.style.height = '25px';
        divmess.style.width = '150px';
        divmess.style.flexWrap = 'wrap';
        divmess.style.backgroundColor = 'lightblue';
        divmess.style.borderRadius = '10px';
        divmess.style.marginTop = '5px';
        divmess.style.float = 'right';
        divmess.innerHTML = messnew.text;
        divmess.style.fontSize = '16px';
        divmess.scroll = divmess.scrollHeight+25;
        roomchat.appendChild(divmess);
    } else if(messnew.sender=='admin') {
        console.log('Add complete');
        var divmess = document.createElement('div');
        divmess.style.height = '25px';
        divmess.style.width = '150px';
        divmess.style.flexWrap = 'wrap';
        divmess.style.backgroundColor = 'white';
        divmess.style.borderRadius = '10px';
        divmess.style.float = 'left';
        divmess.innerHTML = messnew.text;
        divmess.scroll = divmess.scrollHeight+25;
        roomchat.appendChild(divmess);
    }
    console.log(arraymess);
    inputchat.value = '';
}

//#endregion 




//Thong bao them vao gio hang
function addSP() {
    alert("Them vao gio hang thanh cong");
}
function xoaSP() {
    var sp = document.getElementsByClassName("close").value;
    var i;
    for (i = 0; i < sp.length; i++) {
        
    }
}



//#region
//chinh navbar
function topnavbar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
//function topnav() {
//    document.getElementById("mySidebar").style.width = "250px";
//    document.getElementById("main").style.marginLeft = "250px";
//}

//function closeNav() {
//    document.getElementById("mySidebar").style.width = "0";
//    document.getElementById("main").style.marginLeft = "0";
//}


window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if ((document.body.scrollTop > 115 || document.documentElement.scrollTop > 115) && window.innerWidth > 600) {
        document.getElementById("navbar").style.position = "fixed";
        document.getElementById("navbar").style.padding = "0px 0px";
        document.getElementById("navbar").style.marginTop = "0";
        document.getElementById("navbar").style.top = "0";
    }
    else {
        document.getElementById("navbar").style.top = "auto";
        document.getElementById("navbar").style.position = "unset";
    }
}
//#endregion



//Loc san pham
//#region
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("listSP");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
    }
}

function AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
    }
}

function RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myButton")
var btns = btnContainer.getElementsByClassName("btn")
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
//#endregion