const arrow = document.getElementById('arrow')
const arrow2 = document.getElementById('arrow2')

const secondContainer = document.getElementById('second')
const thirdContainer = document.getElementById('third')

arrow.addEventListener('click', () => {
    secondContainer.scrollIntoView({behavior:'smooth', block: 'start'})
})
arrow2.addEventListener('click', () => {
    thirdContainer.scrollIntoView({behavior:'smooth', block: 'start'})
})

