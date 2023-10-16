AOS.init();

const dataDoEvento = new Date("Apr, 2, 2024 00:00:01");
const timeStampDoEvento = dataDoEvento.getTime();
const contaAsHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaMS = (1000 * 60 * 60 * 24);
    const hrMS = (1000 * 60 * 60);
    const minMS = (1000 * 60);

    const diasEvento = Math.floor(distanciaAteOEvento / diaMS);
    const horasEvento = Math.floor(distanciaAteOEvento % diaMS / hrMS);
    const minutosEvento = Math.floor(distanciaAteOEvento % hrMS / minMS);
    const segundosEvento = Math.floor(distanciaAteOEvento % minMS / 1000);

    document.getElementById('contador').innerHTML = ' ' + diasEvento + 'd ' + horasEvento + 'h ' + minutosEvento +'min ' + segundosEvento + 's ';

    if(distanciaAteOEvento < 0){
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = '  O aniversário já passou :(';
    }
}, 1000);