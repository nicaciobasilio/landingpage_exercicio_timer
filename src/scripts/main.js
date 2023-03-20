AOS.init();

const dataDoEvento = new Date("Sep 03, 2023, 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    let agora = new Date();
    let timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    let diasEmMs = 1000 * 60 * 60 * 24;
    let horasEmMS = 1000 * 60 * 60;
    let minutosEmMS = 1000 * 60;
    let segundosEmMS = 1000;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diasEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diasEmMs) / horasEmMS);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horasEmMS) / minutosEmMS);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutosEmMS) / segundosEmMS);

    document.getElementById("contador").innerHTML = `ocorrerá em ${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById("contador").innerHTML = "já ocorreu esse ano! :D"
    }

}, 1000) 