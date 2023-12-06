
function carousel(){
    const prev = document.querySelector('.fa-chevron-left')
    const next = document.querySelector('.fa-chevron-right')
    const slider = document.querySelector('.slide-track')

    prev.addEventListener('click', () =>{
        slider.scrollLeft -= 300
    })

    next.addEventListener('click', () =>{
        slider.scrollLeft += 300
    })
}
export default carousel