const controle = document.querySelectorAll('.controle-ajuste')
const estatisticas = document.querySelectorAll('[data-estatistica]')
const pecas = {
  bracos: {
    forca: 29,
    poder: 35,
    energia: -21,
    velocidade: -5
  },

  blindagem: {
    forca: 41,
    poder: 20,
    energia: 0,
    velocidade: -20
  },
  nucleos: {
    forca: 0,
    poder: 7,
    energia: 48,
    velocidade: -24
  },
  pernas: {
    forca: 27,
    poder: 21,
    energia: -32,
    velocidade: 42
  },
  foguetes: {
    forca: 0,
    poder: 28,
    energia: 0,
    velocidade: -2
  }
}

const botoesCor = document.querySelectorAll('.btn-cor')
const robo = document.querySelector('.robo')

botoesCor.forEach(botao => {
  botao.addEventListener('click', () => {
    console.log('aplicando a cor ' + botao.dataset.cor + ' no Robotron 2000!')
    robo.src = `img/robotron-${botao.dataset.cor}.png`
    botao.classList.add('btn-ativo')

    botoesCor.forEach(btn => {
      if (btn.dataset.cor != botao.dataset.cor)
        btn.classList.remove('btn-ativo')
    })
  })
})

controle.forEach(elemento => {
  elemento.addEventListener('click', evento => {
    manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
    atualizaEstatisticas(evento.target.dataset.peca)
  })
})

function manipulaDados(operacao, controle) {
  const peca = controle.querySelector('[data-contador]')
  if (operacao === '-') {
    peca.value = parseInt(peca.value) - 1
  } else {
    peca.value = parseInt(peca.value) + 1
  }
}

function atualizaEstatisticas(peca) {
  console.log(pecas[peca])

  estatisticas.forEach(elemento => {
    elemento.textContent =
      parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
  })
}
