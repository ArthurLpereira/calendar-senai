const atual = document.getElementById('atual');
const dias = document.getElementById('dias');
const btnVoltar = document.getElementById('anterior');
const btnProximo = document.getElementById('proximo');
const DivData = document.getElementById('data');
const abrir_menu = document.getElementsByClassName('hamburguer')[0];
const menu = document.getElementsByClassName('menu')[0];
const btnTrocarTema = document.getElementById('TrocarTema');
const Mensal = document.getElementById('Mensal');
const Semanal = document.getElementById('Semanal');
const modal = document.getElementById('modal')
const fecharModal = document.getElementById('fechar-modal');

let MesAtual = 10; 
let ano = 2024;
let inicioSemana = new Date(ano, MesAtual, 1);
let DataAtual = new Date();
let visualizacaoSemanal = false; 


const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

// Gerar os dias
function GerarDias(mes, ano) {
    dias.innerHTML = "";
    const DiaSTotal = new Date(ano, mes + 1, 0).getDate();
    const primeiroDiaSemana = new Date(ano, mes, 1).getDay();


    for (let i = 0; i < primeiroDiaSemana; i++) {
        const outro_mes = document.createElement('div');
        outro_mes.classList.add('vazio');
        dias.appendChild(outro_mes);
    }


    for (let dia = 1; dia <= DiaSTotal; dia++) {
        const diaElemento = document.createElement('div');
        diaElemento.classList.add('dia');
        diaElemento.textContent = dia;

        const final_semana = new Date(ano, mes, dia).getDay();
        if (final_semana === 0 || final_semana === 6) {
            diaElemento.classList.add('fim_semana');
        }

        diaElemento.addEventListener('click', () => {
            const nomeMes = meses[mes];
            const dataSelecionada = `${ano}-${mes + 1}-${dia}`;
            document.getElementById('atual-dialog').textContent = `Dia ${dia} de ${nomeMes} de ${ano}`;
            document.getElementById('txtdata').value = dataSelecionada;
            modal.showModal();
        });
        
        
        dias.appendChild(diaElemento);
    }


    const ultimo_dia = new Date(ano, mes, DiaSTotal).getDay();
    const faltam_semana = 6 - ultimo_dia;

    for (let i = 1; i <= faltam_semana; i++) {
        const outro_mes = document.createElement('div');
        outro_mes.classList.add('vazio');
        dias.appendChild(outro_mes);
    }
}

function CarregarCalendario(transicao) {
    atual.textContent = `${meses[MesAtual]} ${ano}`;
    TransicaoMes(transicao);
    GerarDias(MesAtual, ano);
}

function TransicaoMes() {
    dias.style.opacity = '0';

    setTimeout(() => {
        atual.textContent = `${meses[MesAtual]} ${ano}`;
        GerarDias(MesAtual, ano);
        dias.style.opacity = '1';
    }, 400);
}

// Função para gerar o calendário semanal
function CalendarioSemanal() {
    const inicioSemana = new Date(DataAtual);
    inicioSemana.setDate(DataAtual.getDate() - DataAtual.getDay());

    dias.innerHTML = '';

    for (let i = 0; i < 7; i++) {
        const dia = new Date(inicioSemana);
        dia.setDate(inicioSemana.getDate() + i);

        const diaElemento = document.createElement('div');
        diaElemento.classList.add('dia');
        diaElemento.textContent = dia.getDate();

        diaElemento.addEventListener('click', () => {
            document.querySelectorAll('.dia').forEach(i => i.classList.remove('selecionado'));
            diaElemento.classList.add('selecionado');

            const nomeMes = meses[dia.getMonth()]; 
            const dataSelecionada = `Dia ${dia.getDate()} de ${nomeMes} de ${dia.getFullYear()}`; 
            DivData.textContent = dataSelecionada;
        });

        diaElemento.addEventListener('click', () => {
            const nomeMes = meses[mes];
            const dataSelecionada = `${ano}-${mes + 1}-${dia}`;
            document.getElementById('atual-dialog').textContent = `Dia ${dia} de ${nomeMes} de ${ano}`;
            document.getElementById('txtdata').value = dataSelecionada;
            modal.showModal();
        });

        diaElemento.addEventListener('click', () => {
            const nomeMes = meses[mes];
            const dataSelecionada = `${ano}-${mes + 1}-${dia}`;
            document.getElementById('atual-dialog').textContent = `Dia ${dia} de ${nomeMes} de ${ano}`;
            document.getElementById('txtdata').value = dataSelecionada;
            modal.showModal();
        });
        
        dias.appendChild(diaElemento);
    }


    MesAtual = inicioSemana.getMonth(); 
    ano = inicioSemana.getFullYear(); 
    atual.textContent = `${meses[MesAtual]} ${ano}`;
}


btnVoltar.addEventListener('click', () => {
    if (visualizacaoSemanal) {
        DataAtual.setDate(DataAtual.getDate() - 7);
        CalendarioSemanal();
    } else {
        MesAtual--;
        if (MesAtual < 0) {
            MesAtual = 11;
            ano--;
        }
        CarregarCalendario('saindo-mes');
    }
});

btnProximo.addEventListener('click', () => {
    if (visualizacaoSemanal) {
        DataAtual.setDate(DataAtual.getDate() + 7);
        CalendarioSemanal();
    } else {
        MesAtual++;
        if (MesAtual > 11) {
            MesAtual = 0;
            ano++;
        }
        CarregarCalendario('entrando-mes'); 
    }
});

Semanal.addEventListener('click', () => {
    visualizacaoSemanal = true; 
    DataAtual = new Date(); 
    CalendarioSemanal(); 
});

Mensal.addEventListener('click', () => {
    visualizacaoSemanal = false; 
    CarregarCalendario('mes-atual');al
});

// Abrir menu
abrir_menu.addEventListener('click', () => {
    abrir_menu.classList.toggle('aberto');
    menu.classList.toggle('ativo');
});

// Trocar tema
function mudarTema() {
    document.body.classList.toggle('modo-escuro');
}
btnTrocarTema.addEventListener('click', mudarTema);


CarregarCalendario('mes-atual');

fecharModal.addEventListener('click', () =>{
    modal.close();
})
