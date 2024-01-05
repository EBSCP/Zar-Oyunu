function Changed() {
    const min = 1;
    const max = 6;
    const Random = Math.floor(Math.random() * (max - min + 1)) + min;

    const Yazi = document.getElementById('SONUC');
    Yazi.textContent = `Zarın: ${Random}`;

    const Image = document.getElementById('Resim');
    Image.src = `${Random}.png`;
}

function Name() { 
    const minumum = 1;
    const maximum = 6;

    const randomNumber = Math.floor(Math.random() * (maximum - minumum+1))+minumum;

    const Img = document.getElementById('Resm');
    Img.src=`${randomNumber}.png`;

    const texts =document.getElementById('SONUC');
    texts.textContent = `Zarın: ${randomNumber}`; 
}
 
function Methodlar() {
    Name();
    Changed();
    const randomNumber = parseInt(document.getElementById('SONUC').textContent.match(/\d+/)[0], 10);
    const Random = parseInt(document.getElementById('SONUC').textContent.match(/\d+/)[0], 10);

    if (randomNumber >Random) {
        document.getElementById('SONUC').innerHTML ="randomNUMBER is THE WİNNER";
    }
    else {
        document.getElementById('SONUC').innerHTML ="Random is THE WİNNER";
    }
}



