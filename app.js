function addStorage(){
    var key = document.getElementById("key").value;
    var value = document.getElementById("value").value;
    localStorage.setItem(key,value);
    console.log("Stored")
}

function getValue(){
    var key = document.getElementById("getkey").value;
    var value = localStorage.getItem(key);
    console.log(value);
}

function localClear(){
    localStorage.clear();
}

function localLength(){
    let len = localStorage.length;
    console.log(len)
}

function remove(){
    var key = document.getElementById("removekey").value;
    localStorage.removeItem(key);
}