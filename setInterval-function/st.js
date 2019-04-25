function verSaat()
{
    var simdi = new Date();
    return simdi.toLocaleTimeString();    // return 23:59:59
}

function verSaDaSa()
{
    var sonuc = new Array(3);
    var simdi = new Date();

    sonuc[0] = simdi.getHours();
    sonuc[1] = simdi.getMinutes();
    sonuc[2] = simdi.getSeconds();



    return sonuc;
}
function saatGoster()
{
    saat = verSaat();
    console.log( saat );

    saat = verSaDaSa();
    console.log(saat[0] + "/" + saat[1] + "/" + saat[2] );
}
setInterval(saatGoster);