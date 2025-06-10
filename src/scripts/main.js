AOS.init();

const dateFutura = new Date("June 18, 2025 19:30:00");
const timeStampDataFuturo = dateFutura.getTime();

console.log('data futura',timeStampDataFuturo);

const dataDoEvento = setInterval(function(){
    const dataAtual = new Date();
    const timeSTampDataAtual = dataAtual.getTime();
    const dataEvent = timeStampDataFuturo - timeSTampDataAtual;

    const dia = 1000 * 60 * 60 * 24;
    const hora = 1000 * 60 * 60;
    const minuto = 1000 * 60
    const segundos = 1000;

    const dataEmDias = Math.floor( dataEvent / dia);
    const dataEmHoras = Math.floor(dataEvent % (dia) / (hora));
    const dataEmMinutos = Math.floor(dataEvent  % (hora) / (minuto));
    const dataEmSegundos = Math.floor(dataEvent % (minuto) / segundos);

    document.querySelector('.contagem-regressiva').innerHTML = `${dataEmDias}d ${dataEmHoras}h ${dataEmMinutos}m ${dataEmSegundos}s`;

    if(timeSTampDataAtual > timeStampDataFuturo){
        clearInterval(dataDoEvento);
        document.querySelector('.contagem-regressiva').innerHTML ="O evento já começou";
    }
},1000)