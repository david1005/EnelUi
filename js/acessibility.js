//By Kyoto Developer



$(document).ready(function(){
  $("#contraste").click(function(){
    $("body").toggleClass("contraste");
    $("a").toggleClass("contraste");
    $("p").toggleClass("contraste");
    $("h6").toggleClass("contraste");
    $("h5").toggleClass("contraste");
    $("h4").toggleClass("contraste");
    $("h3").toggleClass("contraste");
    $("h2").toggleClass("contraste");
    $("h1").toggleClass("contraste");
    $("div").toggleClass("contraste");
    $(".contrastex").toggleClass("contraste");
    $(".contrastef").toggleClass("contrasteimportant");
  });
});

$(document).ready(function(){
  $("#fonte").click(function(){
    $("body").toggleClass("aumentarfonte");
    $("a").toggleClass("aumentarfonte");
    $("p").toggleClass("aumentarfonte");
    $("h6").toggleClass("aumentarfonte");
    $("h5").toggleClass("aumentarfonte");
    $("h4").toggleClass("aumentarfonte");
    $("h3").toggleClass("aumentarfonte");
    $("h2").toggleClass("aumentarfonte");
    $("h1").toggleClass("aumentarfonte");
    $("div").toggleClass("aumentarfonte");
  });
});