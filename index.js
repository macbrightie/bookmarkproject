
$('.navbar-div').hide();

$('.hamburger').click(function(){
 $('.brand').hide();
    $('.navbar-div').show();
  
})

$('.icon-close').click(function(){

    $('.navbar-div').hide();
    $('.brand').show();
    
});

// drop-down area

//all hidden
$('.underline').hide();
$('.image2').hide();
$('.image3').hide();

$('.bookmark2').hide();
$('.bookmark3').hide();

//click to show

$('#drop-button1').click(function(e){

    e.preventDefault();
      //hide
      $('.underline2').hide();
      $('.image2').hide();
      $('.bookmark2').hide();
      $('.underline3').hide();
      $('.image3').hide();
      $('.bookmark3').hide();

      //show
    $('.underline1').show();
    $('.image1').show();
    $('.bookmark1').show();
    
});

$('#drop-button2').click(function(e){

    e.preventDefault();
  //hide
    $('.underline1').hide();
    $('.image1').hide();
    $('.bookmark1').hide();
    $('.underline3').hide();
    $('.image3').hide();
    $('.bookmark3').hide();
    //show
    $('.underline2').show();
    $('.image2').show();
    $('.bookmark2').show();

    
});

$('#drop-button3').click(function(e){

    e.preventDefault();
    //hide
    $('.underline1').hide();
    $('.image1').hide();
    $('.bookmark1').hide();
    $('.underline2').hide();
    $('.image2').hide();
    $('.bookmark2').hide();

    //show
    $('.underline3').show();
    $('.image3').show();
    $('.bookmark3').show();

    
});

//frequntly asked question

//hidden
    $('.para1').hide();
    $('.para2').hide();
    $('.para3').hide();
    $('.para4').hide();
    $('.close1').hide();
    $('.close2').hide();
    $('.close3').hide();
    $('.close4').hide();

    // show

$('.drop-button1').click(function (){
  
    $('.para1').show();
     $('.close1').show();
     $('.drop-button1').hide();

});

$('.drop-button2').click(function (){
  
    $('.para2').show();
     $('.close2').show();
     $('.drop-button2').hide();

});

$('.drop-button3').click(function (){
  
    $('.para3').show();
     $('.close3').show();
     $('.drop-button3').hide();

});

$('.drop-button4').click(function (){
  
    $('.para4').show();
     $('.close4').show();
     $('.drop-button4').hide();

});
//hide
$('.close1').click(function (){
  
    $('.para1').hide();
     $('.close1').hide();
     $('.drop-button1').show();

});

$('.close2').click(function (){
  
    $('.para2').hide();
     $('.close2').hide();
     $('.drop-button2').show();

});

$('.close3').click(function (){
  
    $('.para3').hide();
     $('.close3').hide();
     $('.drop-button3').show();

});

$('.close4').click(function (){
  
    $('.para4').hide();
     $('.close4').hide();
     $('.drop-button4').show();

});