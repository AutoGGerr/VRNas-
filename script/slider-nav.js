const navSlider = document.querySelectorAll('.slide-nav')
const navIcon = document.querySelectorAll('.icon-slider')

navIcon.forEach((iconCurrent, number) =>{
    iconCurrent.addEventListener('click', () => {
        if(!iconCurrent.classList.contains('icon-slider-active')){
            navIcon.forEach((iconCurrent) => {
                iconCurrent.classList.remove('icon-slider-active')
            })
            navSlider.forEach((sliderCurrent) =>{
                sliderCurrent.classList.add('slider-animated')
                sliderCurrent.classList.add('hidden')
            })


            iconCurrent.classList.add('icon-slider-active')
            navSlider[number].classList.remove('hidden')
        } else{
            iconCurrent.classList.remove('icon-slider-active')
            navSlider[number].classList.add('hidden')
        }
    })
})
