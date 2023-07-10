$(document).ready(function(){


    //****************** MAIN PAGE SLIDER_1******************
    let mainSlider = new Swiper(".mo_MainStation,.mainStation",{
        breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
            },
            // when window width is >= 480px
            768: {
              slidesPerView: 1,
            }          
          },
          navigation: {
              nextEl: ".btnNext",
              prevEl: ".btnPrev",
          },
          on: {
            slideChange: function () {
              console.log(this.activeIndex)
              $(".mainTrain>li").removeClass("on")
              $(".mainTrain>li").eq(this.activeIndex).addClass("on")
              $(".controlerMain>li").removeClass("on")
              $(".controlerMain>li").eq(this.activeIndex).addClass("on")
            }
          }
    })
    
    // let count = 0;
    // let mainPerview;
    // let mainStationWidth;
    // let mainWidth = $(window).width();
    // if(mainWidth>=1204){
    //     mainPerview = 1;

    // }else{
    //     mainPerview = 1;
    // }

    // $(window).resize(function(){
    //     let mainWidth = $(window).width();
    //     if(mainWidth>=1024){
    //         mainPerview = 1;
    //         mainStationWidth = $(".mainStation").width()
    //     }else{
    //         mainPerview = 1;
    //         mainStationWidth = $(".mainStation").width()
    //     }
    // })

    // $(".btnNext").click(function(){
    //     count++;
    //     if(count>3){count = 0}
    // //    $(".train").css("transform","translateX(-"+count*25+"%)")
    //     slideMove(count)
    //    $(".train>li").removeClass("on")
    //    $(".train>li").eq(count).addClass("on")
    //    $(".pagination>li").removeClass("on")
    //    $(".pagination>li").eq(count).addClass("on")
 
    // })
    // 다음 버튼을 눌렀을 때
    // $(".btnNext").click(function(e){
    //     count++;
    //     e.preventDefault()
    //     if(count>2){count = 0}
    //     slideMove(count)
    //     $(".mainTrain>li").removeClass("on")
    //     $(".mainTrain>li").eq(count).addClass("on")
    //     $(".controlerMain>li").removeClass("on")
    //     $(".controlerMain>li").eq(count).addClass("on")

    // })
    // $(".btnPrev").click(function(e){
    //     count--;
    //     e.preventDefault()
    //     if(count<0){count = 0}
    //     slideMove(count)
    //     $(".mainTrain>li").removeClass("on")
    //     $(".mainTrain>li").eq(count).addClass("on")
    //     $(".controlerMain>li").removeClass("on")
    //     $(".controlerMain>li").eq(count).addClass("on")

        
    // })

    function slideMove(idx){
        $(".mainTrain,.mo_MainTrain").css("transform","translateX("+(-(100/3)*idx)+"%)")
    }
    //*********************SUB1 SLIDER*********************** 
    let subOneCount = 0;
    let perViewsubOne;
    let subStationWidth;
    let subTrainWidth;
    let subOneWidth =$(window).width();

    if(subOneWidth>=1024){
        perViewsubOne = 2;
        subStationWidth = $(".proStation").width()
        subTrainWidth = subStationWidth * 4 /perViewsubOne
        $(".proTrain").width(subTrainWidth)
    }else{
        perViewsubOne = 1;
        subStationWidth = $(".proStation").width()
        subTrainWidth = subStationWidth * 4 /perViewsubOne
        $(".proTrain").width(subTrainWidth)
    }

    $(window).resize(function(){
        let subOneWidth =$(window).width();
        if(subOneWidth>=1024){
            perViewsubOne = 2;
            subStationWidth = $(".proStation").width()
            subTrainWidth = subStationWidth * 4 /perViewsubOne
            $(".proTrain").width(subTrainWidth)
        }else{
            perViewsubOne = 1;
            subStationWidth = $(".proStation").width()
            subTrainWidth = subStationWidth * 4 /perViewsubOne
            $(".proTrain").width(subTrainWidth)
        }

    })
   //다음 버튼을 눌렀을 때
    // $(".subOneNext").click(function(e){
    //     subOneCount++;
    //     e.preventDefault()
    //     if(subOneCount>3){subOneCount = 0}
    //     subOneslider(subOneCount)
       
      
    // })
    // $(".subOnePrev").click(function(e){
    //     subOneCount--;
    //     e.preventDefault()
    //     if(subOneCount<0){subOneCount = 0}
    //     subOneslider(subOneCount)
        
    // })
    // let timer = setInterval(function(){
    //     subOneCount++;
    //     if(subOneCount>4){subOneCount = 0}
    //     subOneslider(subOneCount)
    // },2000)


    function subOneslider(idx){
        $(".proTrain").css("transform","translateX("+(-(100/4)*idx)+"%)")

    }

    //**********************BEST SELLERS SLIDER******************

    let bestCount = 0;
    let perViewBest = 1;
    let step = 1;
    let deviceWidth = $(window).width()
    if(deviceWidth>=1024){
        perViewBest = 3;
    }else{
        perViewBest = 2;
    }
    $(".bestTrain").css("width",600/perViewBest+"%")

    $(window).resize(function(){
        let deviceWidth = $(window).width()
        if(deviceWidth>=1024){
            perViewBest = 3;
        }else{
            perViewBest = 2;
        }   
        $(".bestTrain").css("width",600/perViewBest+"%")
    })
   //다음 버튼을 눌렀을 때
    $(".bestNext").click(function(e){
        bestCount++;
        e.preventDefault()
        console.log(bestCount)
        if(bestCount>(6/perViewBest)+1){bestCount = 0}
        bestslide(bestCount)
        $(".slideLine>div").css("width",(100/6)*(bestCount+perViewBest)+"%")
      
    })
    $(".bestPrev").click(function(e){
        bestCount--;
        e.preventDefault()
        if(bestCount<0){bestCount = 6/perViewBest}
        bestslide(bestCount)
        $(".slideLine>div").css("width",(100/6)*(bestCount+perViewBest)+"%")
        
    })
    function bestslide(idx){
        $(".bestTrain").css("transform","translateX("+((-(100/6)*idx)*step)+"%)")
    }
    // setInterval(function(){
    //     bestCount++;
    //     if(bestCount>1){bestCount = 0}
    //     bestslide(bestCount)
    // },3000)

    //*********************EVENT SLIDER*********************** 
    let eventSliderBanner = new Swiper(".eventSliderBanner,.moEventSliderBanner",{

        breakpoints:{
            280:{
                slidesPerView :1,
            },
            768:{
                slidesPerView :1,
            
            }
        },
        pagination: {
            el: ".bannerLine",
        },
        autoplay:{
            delay:3000,
        }
    })

    //***************ABOUT SLIDER**************
    console.log()
    let mi_count = 0;
    $(".mi_next").click(function(){
        mi_count--
        $(".aboutTrain>li").each(function(){
            let idx = $(this).index()
            console.log("리스트의 순번"+idx)
            console.log("더해지는 증가값"+mi_count)
            let classIdx = ((idx+mi_count) % 3)<0?((idx+mi_count) % 3)+3:((idx+mi_count) % 3)
            console.log("추가되는 클래스순번:"+classIdx)
            $(this).removeClass()
            $(this).addClass("sideImg"+classIdx)
        })
    })

    $(".mi_prev").click(function(){
        mi_count++
        $(".aboutTrain>li").each(function(){
            let idx = $(this).index()
            let classIdx = ((idx+mi_count) % 3)
            $(this).removeClass()
            $(this).addClass("sideImg"+classIdx)
        })
    })

    // $(".mi_prev").click(function(){
    //     mi_count++

        
    // })

    // $(".aboutTrain>li").click(function(){
    //     // alert("TEST")
    //     mi_count++
    //     prevAboutTrain(mi_count)
    // })

    // function prevAboutTrain(count){
    //     $(".aboutTrain>li").each(function(){
    //         let idx = $(this).index()
    //         let classIdx = ((idx+count) % 3)
    //         $(this).removeClass()
    //         $(this).addClass("sideImg"+classIdx)
    //     })
    // }
    

    
  


    
    
 



})