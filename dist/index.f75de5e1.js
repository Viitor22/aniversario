AOS.init();
const dataDoEvento = new Date("Apr, 2, 2024 00:00:01");
const timeStampDoEvento = dataDoEvento.getTime();
const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;
    const diaMS = 86400000;
    const hrMS = 3600000;
    const minMS = 60000;
    const diasEvento = Math.floor(distanciaAteOEvento / diaMS);
    const horasEvento = Math.floor(distanciaAteOEvento % diaMS / hrMS);
    const minutosEvento = Math.floor(distanciaAteOEvento % hrMS / minMS);
    const segundosEvento = Math.floor(distanciaAteOEvento % minMS / 1000);
    document.getElementById("contador").innerHTML = " " + diasEvento + "d " + horasEvento + "h " + minutosEvento + "min " + segundosEvento + "s ";
    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById("contador").innerHTML = "  O anivers\xe1rio j\xe1 passou :(";
    }
}, 1000);

//# sourceMappingURL=index.f75de5e1.js.map
