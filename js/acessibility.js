//By Kyoto Developer



$(document).ready(function(){
    $("#contraste").click(function(){
      $("body").toggleClass("contraste");
      $("a").toggleClass("contraste");
      $(".contrastex").toggleClass("contraste");
      $(".contrastef").toggleClass("contrasteimportant");
      $("p").toggleClass("contraste");
      $("h6").toggleClass("contraste");
      $("h5").toggleClass("contraste");
      $("h4").toggleClass("contraste");
      $("h3").toggleClass("contraste");
      $("h2").toggleClass("contraste");
      $("div").toggleClass("contraste");
    });
  });

  $(document).ready(function(){
    $("#fonte").click(function(){
      $("body").toggleClass("aumentarfonte");
      $("p").toggleClass("aumentarfonte");
      $("h5").toggleClass("aumentarfonte");
      $("h6").toggleClass("aumentarfonte");
      $("a").toggleClass("aumentarfonte");
    });
  });