// edit me and html page will be reloaded

window.addEventListener('load', () => {

  const clickBtn = document.body.querySelector('#clickBtn')
  const reloadBtn = document.body.querySelector('#reloadBtn')

  const reloadsEl = document.body.querySelector('#reloads')
  const clicksEl = document.body.querySelector('#clicks')

  let clicks = Number(window.sessionStorage.getItem('clicks') || 0)
  clicksEl.innerText = clicks
  clickBtn.addEventListener('click', () => {
    clicksEl.innerText = ++clicks
    window.sessionStorage.setItem('clicks', clicks)
  })
  
  const reloads = Number(window.sessionStorage.getItem('reloads') || 0)
  reloadsEl.innerText = reloads
  window.sessionStorage.setItem('reloads', reloads + 1)
  reloadBtn.addEventListener('click', () => {
    reloadBtn.disabled = true
    reloadBtn.innerText = 'reloading...'
    window.location.reload()
  })

})
