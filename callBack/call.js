function soyle(text, callback) {
    console.log(text);
    callback();
}

function cayDemle() {
    console.log("Çay Demleniyor..");
}

soyle("Merhaba", cayDemle);