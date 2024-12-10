function handleCallToast(dataToast) {
  const cardToast = document.createElement('li')
  cardToast.classList.add('cardToast')

  const iconToast = document.createElement('i')
  iconToast.classList.add('fa-solid')

  switch(dataToast.toastType) {
    case 'success':
      cardToast.classList.add('successToast')
      iconToast.classList.add('fa-check')
      break
    case 'info':
      cardToast.classList.add('infoToast')
      iconToast.classList.add('fa-info')
      break
    case 'warning':
      cardToast.classList.add('warningToast')
      iconToast.classList.add('fa-warning')
      break
    case 'danger':
      cardToast.classList.add('dangerToast')
      iconToast.classList.add('fa-exclamation')
      break
  }
  
  cardToast.appendChild(iconToast)

  const msgToast = document.createElement('span')
  msgToast.innerHTML = dataToast.toastMsg
  cardToast.appendChild(msgToast)

  const getCardListToast = document.querySelector('#cardListToast')
  getCardListToast.appendChild(cardToast)

  setTimeout(() => {
    cardToast.style.animation = 'hiddeCardToast .15s forwards'

    setTimeout(() => {
      cardToast.remove()
    }, 150)
  }, 1250)
}