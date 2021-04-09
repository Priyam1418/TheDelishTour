
// Latest Column -->
var images = ["./static/Media/11.jpg","./static/Media/14.jpeg","./static/Media/12.jpg"];
var names = ["Potato Bites","Maggie Pockets","Coffee Cookies"]
var latest = ["https://www.youtube.com/watch?v=a8GutnTXZE8","https://www.youtube.com/watch?v=jH6m7Pqf9fU","https://www.youtube.com/watch?v=fD7UHJHi3No"]
var comment = ["Recipe is very delicious and everyone's favourite specially kid's favourite. It comes out so crispy and tasty that you will love to try them.","Maggi Pockets/ Maggi Puffs is a tasty and crispy snack.  Crispy from outside and perfect taste of Maggi from inside.","These coffee bean cookies with just 5 ingredients are super simple, super delicious and adorable as well, isn't it? Do try them, you'll love it."];

//Recipies Column-->

var Recipes = [
    {img_path:"./static/Media/4.jpeg", heading:"Name1", details:"Recipe is very delicious and everyone's favourite", ytlink: "https://www.youtube.com/watch?v=a8GutnTXZE8"},
    {img_path:"./static/Media/5.jpeg", heading:"Name1", details:"Recipe is very delicious and everyone's favourite", ytlink: "a"},
    {img_path:"./static/Media/6.jpeg", heading:"Name1", details:"Recipe is very delicious and everyone's favourite", ytlink: "https://www.youtube.com/watch?v=a8GutnTXZE8"},
    {img_path:"./static/Media/7.jpeg", heading:"Name1", details:"Recipe is very delicious and everyone's favourite", ytlink: "a"},
    {img_path:"./static/Media/8.jpeg", heading:"Name1", details:"Recipe is very delicious and everyone's favourite", ytlink: "https://www.youtube.com/watch?v=a8GutnTXZE8"},
    {img_path:"./static/Media/9.jpeg", heading:"Name1", details:"Recipe is very delicious and everyone's favourite", ytlink: "https://www.youtube.com/watch?v=a8GutnTXZE8"},
    {img_path:"./static/Media/4.jpeg", heading:"Name1", details:"Recipe is very delicious and everyone's favourite", ytlink: "a"},
    {img_path:"./static/Media/5.jpeg", heading:"Name1", details:"Recipe is very delicious and everyone's favourite", ytlink: "https://www.youtube.com/watch?v=a8GutnTXZE8"},
    
];

function scrollToRecipies(){
    var element = document.getElementById("main");
    var headerOffset = 20;
    var offsetPosition = element.offsetTop + element.offsetHeight + headerOffset;
    console.log(offsetPosition);
    $(window).scrollTop(offsetPosition);
}

var current_page = 1;
var records_per_page = 3;

function prevPage()
{   
    current_page--;
    if (current_page < 1) {
        current_page = numPages();
    }
    changePage(current_page);
}

function nextPage()
{
    current_page++;
    if (current_page > numPages()) {
        current_page = 1;
    }
    changePage(current_page);
}

function changePage(page)
{   
    var btn_next = document.getElementById("btn_next");
    var btn_prev = document.getElementById("btn_prev");
    var page_span = $(".page-span");
    var a = document.getElementById("a");
    var b = document.getElementById("b");
    var c = document.getElementById("c");

    // Validate page
    // if (page < 1) current_page = numPages();
    // if (page > numPages()) current_page = 1;
    // page = current_page;

    console.log(page,numPages());

    index = (page-1)*3
    total = Recipes.length

    page_span.html(page);
    // settings of a
    if(index<total){
        a.style.display = "inline-flex";
        document.getElementById("a-img").setAttribute("src",Recipes[index].img_path);
        $("#a-h3").text(Recipes[index].heading);
        $("#a-p").text(Recipes[index].details);
        document.getElementById("a-link").setAttribute("href",Recipes[index].ytlink);
    }
    else{
        a.style.display = "hidden";
    }
    

    // settings of b
    if(index+1<total){
        b.style.display = "inline-flex";
        document.getElementById("b-img").setAttribute("src",Recipes[index+1].img_path);
        $("#b-h3").text(Recipes[index+1].heading);
        $("#b-p").text(Recipes[index+1].details);
        document.getElementById("b-link").setAttribute("href",Recipes[index+1].ytlink);
    }
    else{
        b.style.display = "none";
    }
    

    // settings of c

    if(index+2<total){
        c.style.display = "inline-flex";
        document.getElementById("c-img").setAttribute("src",Recipes[index+2].img_path);
        $("#c-h3").text(Recipes[index+2].heading);
        $("#c-p").text(Recipes[index+2].details);
        document.getElementById("c-link").setAttribute("href",Recipes[index+2].ytlink);
    }
    else{
        c.style.display = "none";
    }
    

    if (page == 1) {
        btn_prev.style.visibility = "hidden";
    } else {
        btn_prev.style.visibility = "visible";
    }

    if (page == numPages()) {
        btn_next.style.visibility = "hidden";
    } else {
        btn_next.style.visibility = "visible";
    }
}

function numPages()
{
    return Math.ceil(Recipes.length / records_per_page);
}


$(document).ready(function () {
    $(window).load(function(){
        $(window).scrollTop(0);
        AOS.init();
        AOS.refresh();
    })
    
    changePage(1);
    $(".overlay p").html(comment[0]);
    $('#des-img').attr('src', images[0])
    $(".overlay a").attr('href', latest[0]);

    // GSAP -------------------->
    gsap.fromTo("#one", { y: +30, opacity: 0 }, { y: 0, duration: 1, opacity: 1 });
    // gsap.to('#svg_txt', { duration: 1, transformOrigin: '50% 50%',ease: "back.out(1.7)", y: -500 });
    var tl = new TimelineLite();
    tl.fromTo("#the1", {opacity: 0}, {opacity: 1, duration: 0.1})
      .fromTo("#the2", {opacity: 0}, {opacity: 1, duration: 0.1})
      .fromTo("#the3", {opacity: 0}, {opacity: 1, duration: 0.1})
      .fromTo("#delish1", {opacity: 0}, {opacity: 1, duration: 0.1})
      .fromTo("#delish2", {opacity: 0}, {opacity: 1, duration: 0.1})
      .fromTo("#delish3", {opacity: 0}, {opacity: 1, duration: 0.1})
      .fromTo("#delish5", {opacity: 0}, {opacity: 1, duration: 0.1})
      .fromTo("#delish4", {opacity: 0}, {opacity: 1, duration: 0.1})
      .fromTo("#delish6", {opacity: 0}, {opacity: 1, duration: 0.1})
      .fromTo("#tour1", {opacity: 0}, {opacity: 1, duration: 0.1})
      .fromTo("#tour2", {opacity: 0}, {opacity: 1, duration: 0.1})
      .fromTo("#tour3", {opacity: 0}, {opacity: 1, duration: 0.1})
      .fromTo("#tour4", {opacity: 0}, {opacity: 1, duration: 0.1})

    // GSAP END -------------> 

    // ---------Copyright------
    var copy = "© The Delish Tour " + new Date().getFullYear()
    $(".copy p").html(copy);

    if ($(window).width() < 1000) {
        $(window).scroll(function(){
            var st = $(window).scrollTop();
            var element = document.getElementById("svg_div");
            var offsetPosition = element.offsetTop - 100
            // console.log(st);
            if (st > offsetPosition){
                $(".logo").css("visibility","hidden");
            }
            else{
                $(".logo").css("visibility","visible");
            }
        });
    }
    else{
        $(window).scroll(function(){
            var st = $(window).scrollTop();
            var element = document.getElementById("main");
            var headerOffset = 0;
            var offsetPosition = element.offsetTop + element.offsetHeight + headerOffset;
            // console.log(st);
            if (st > offsetPosition){
                $(".logo").css("visibility","hidden");
            }
            else{
                $(".logo").css("visibility","visible");
            }
        });

    }

    $('.navtoggler').on('click', function () {
        $(this).toggleClass('open');
        $('.nav').toggleClass('open');
        AOS.refresh();
    });

    $('.toplist').on('click', function(){
        $('.navtoggler').toggleClass('open');
        $('.nav').toggleClass('open');
        AOS.refresh();
    });

    $('#btn_prev').on('click', function(){
        console.log("Hello");
        scrollToRecipies();
        prevPage();
        AOS.refresh();
    });
    $('#btn_next').on('click', function(){
        console.log("Hello");
        scrollToRecipies();
        nextPage();
        AOS.refresh();
    });

    $(".switch-btn").on('click', function(){
        var btnlist = $(".btn-row").find(".switch-btn");
        // $(".one").removeClass("active");
        for(i=0;i<3;i++){
            $(btnlist[i]).removeClass("active");
        }
        $(this).addClass("active");
    });

    $(".one").text(names[0]);
    $(".two").text(names[1]);
    $(".three").text(names[2]);

    $(".one").on('click',function(){
        $('#des-img').attr('src', images[0]);
        $(".overlay p").html(comment[0]);
        $(".overlay a").attr('href', latest[0]);
        gsap.fromTo("#des-img", {opacity: 0 }, { duration: 0.5, opacity: 1 });
        e.preventDefault();
    });
    $(".two").on('click',function(){
        $('#des-img').attr('src', images[1]);
        $(".overlay p").html(comment[1]);
        $(".overlay a").attr('href', latest[1]);
        gsap.fromTo("#des-img", {opacity: 0 }, { duration: 0.5, opacity: 1 });
        e.preventDefault();
    });
    $(".three").on('click',function(){
        $('#des-img').attr('src', images[2]);
        $(".overlay p").html(comment[2]);
        $(".overlay a").attr('href', latest[2]);
        gsap.fromTo("#des-img", {opacity: 0 }, { duration: 0.5, opacity: 1 });
        e.preventDefault();
    });


})
