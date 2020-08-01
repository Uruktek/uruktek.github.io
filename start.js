function time() {
    let date = new Date();
    let hour = date.getHours();
    //making it 12 hour clock because america....
    if(hour > 12){
        hour = hour - 12;
    }
    let min = date.getMinutes();
    let sec = date.getSeconds();
    
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);

    document.getElementById("clock").innerText = hour + " : " + min + " : " + sec;

    let t = setTimeout(function() {time()}, 1000);
    console.log("tick");

}

function updateTime(k) {
    if (k < 10) {
        return "0" + k;
    }
    else {
        return k;
    }
}

time();