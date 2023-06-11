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
