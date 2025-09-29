let btnNext = document.querySelector('.next')
let btnBack = document.querySelector('.back')

let container = document.querySelector('.container')
let list = document.querySelector('.container .list')
let thumb = document.querySelector('.container .thumb')

btnNext.onclick = () => moveItemsOnClick('next')
btnBack.onclick = () => moveItemsOnClick('back')


// Evento de clique nos botões
btnNext.onclick = () => {
  moveItemsOnClick('next')
  resetAutoPlay()
}

btnBack.onclick = () => {
  moveItemsOnClick('back')
  resetAutoPlay()
}


function moveItemsOnClick(type) {
    let listItems = document.querySelectorAll('.list .list-item')
    let thumbItems = document.querySelectorAll('.thumb .thumb-item')


    // O appendChild() adiciona um elemento no FINAL!!!;
    // prepend() adicona um elento no COMEÇO!!!;
    if(type === 'next'){
      list.appendChild(listItems [0])
      thumb.appendChild(thumbItems [0])
      container.classList.add('next')
    } else{
        list.prepend(listItems[listItems.length - 1])
        thumb.prepend(thumbItems [thumbItems.length - 1])
        container.classList.add('back')
    }

    /* Animações do CSS */

    setTimeout(() => {
        container.classList.remove('next')
        container.classList.remove('back')
    }, 3000);
}

// -------------------------
// AUTO PLAY
// -------------------------
let autoPlay = setInterval(() => {
  moveItemsOnClick('next')
}, 17000) // 5 segundos

// Reinicia o autoplay quando o usuário clica
function resetAutoPlay() {
  clearInterval(autoPlay)
  autoPlay = setInterval(() => {
    moveItemsOnClick('next')
  }, 17000)
}

