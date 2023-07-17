$(document).ready(function(){
    // ******************TAB MENU******************
    // $(".skinSolution>*").addClass("mTtBaleady")

    let menuState = false;
    $(".btnMenu").click(function(e){
        e.preventDefault()
        //btnMenu 클래스를 클릭했을 때 실행될 동작
        if(menuState == false){
            //메뉴가 현재 닫현 있는 상태 ->여는기능
            $(".btnMenu").addClass("close")
            $(".gnb").addClass("show")
            $(".blackcover").addClass("on")
            $(".nav").addClass("on")
            $("header").css("background","#fff")
            menuState = true
        }else{
            //메뉴가 현재 열려있는 상태 -> 닫는기능
            $(".btnMenu").removeClass("close")
            $(".gnb").removeClass("show")
            $(".blackcover").removeClass("on")
            $(".nav").removeClass("on")
            $("header").css("background",'linear-gradient(180deg,#fff,#ffffffd3,#ffffff74)')
            menuState = false
        }
    })

    $(".btnMoMenu").click(function(e){
        e.preventDefault()
        //$(선택된태그).hasClass("on")
        //선택한 태그가 on이라는 클래스가 있다면 사용된 자리에 true를 리턴하고 
        //선택한 태그가 on이라는 클래스가 없다면 사용된 자리에 false를 리턴하는 함수

        if($("nav").hasClass("on")==false){
            //메뉴가 닫혀있는 상태 -> 메뉴를 여는 기능
            $("nav").addClass("on")
            $(".blackcover").addClass("on")
        } else{
            //메뉴가 열려있는 상태 -> 메뉴를 닫는 기능
            $("nav").removeClass("on")
            $(".blackcover").removeClass("on")
        }

    })

    //배경화면눌렀을때 꺼짐
    $(".blackcover").click(function(e){
            e.preventDefault()
            $("nav").removeClass("on")
            $(".nav").removeClass("on")
            $(".btnMenu").removeClass("close")
            $(".gnb").removeClass("show")
            $(".blackcover").removeClass("on")
       
    })
   
    //********화살표2뎁스열기******* *
    $(".gnb>li").click(function(e){
        // e.preventDefault()
        //리스트 클릭했을 때 내가 클릭한 리스트한테 on클래스가 있다 / 없다 라는 기준이 필요!
        
        if($(this).hasClass("on")==true){
            // 여기서 this 클릭한 1뎁스 list 를 의미.
            // 맨처음 false가남겨지게됨 false=true기 때문에 else 구문으로 넘어감.
            $(this).css("height","50px")
            $(this).removeClass("on")
        }else{
            $(".gnb>li").css("height","50px")
            $(".gnb>li").removeClass("on")
            let li2dep = $(this).children("ul").children().length
            // 2뎁스의 list 들의 갯수를 구해서 저장됨.(원소로 저장된 배열객체 저장.)
            $(this).css("height",(li2dep+1)*50+
            "px")
            // 클릭한 1뎁스의 2뎁스 리스트들의 높이
            $(this).addClass("on")

        }

        // $(".gnb>li").css("height","50px")
        //여러개의 리스트 중 내가 클릭한 리스트 포함하고 있는 2뎁스 ul 태그의 자식 li 태그의 개수를 구해서 그 개수에 비례한 만큼의 값으로 클릭한 리스트의 높이를 지정.
        //about 클릭 -높이 150
        //profile 클릭 -높이 200
        // let li2deth = ($(this).children("ul").children().length)
        // $(this).css("height",(li2deth+1)*50+"px")
    });


    // $(".gnb ul").click(function(){
    //     return false
    // })


    //********************SCROLL******************
    $(window).scroll(function(){
        let winst = $(window).scrollTop()
        console.log(winst)
        let winHeight = $(window).height()*0.7
        $(".mTtB,.mTtBaleady,.mLtR,.mBtT,.mRtL").each(function(){
            if(winst+winHeight>$(this).offset().top){
                $(this).addClass("on")
            }else{
                $(this).removeClass("on")
            }
        })
    })
    //********************BTNTOP******************
    $(".btntop").click(function(){
         moveScroll({
             top:0,
             speed:1000
         })
    })
    function moveScroll(option){
        $("html,body").stop().animate({scrollTop:option.top},option.speed)
    }
    //********************SCROLL2******************
        // $(".").click(function(){
        //     $(".mainBanner3").addClass("on")
        // })
    // ***************sub5 TABMENU****************
    $(".tabMenu>dt").click(function(){
        $(".tabMenu>dt").removeClass("on")
        $(this).addClass("on")
    })

    setTimeout(function(){
        $(".aboutLab>h2,.aboutLab>p").addClass("on")
     },1000)

    


})




