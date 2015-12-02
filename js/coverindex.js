$(document).ready(function () {

 $("#pOlegtext").hide();
  $("#pHanatext").hide();
  $("#pChuoltext").hide();

    $('.thumb').hover(function(){
        $(this).find('p').slideToggle();
        $(this).find('h3').toggleClass("hover");
    })

  });