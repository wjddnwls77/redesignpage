$(document).ready(function(){


    let slider1 = new Swiper(".pro1Station",{
        navigation: {
            nextEl: ".soNext1",
            prevEl: ".soPrev1",
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
            },
            // when window width is >= 480px
            768: {
              slidesPerView: 2,
            }
          }
    })
    let slider2 = new Swiper(".pro2Station",{
        navigation: {
            nextEl: ".soNext2",
            prevEl: ".soPrev2",
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
            },
            // when window width is >= 480px
            768: {
              slidesPerView: 2,
            }
          }
    })
    let slider3 = new Swiper(".pro3Station",{
        navigation: {
            nextEl: ".soNext3",
            prevEl: ".soPrev3",
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
            },
            // when window width is >= 480px
            768: {
              slidesPerView: 2,
            }
          }
    })

    


})