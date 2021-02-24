//selectors

$(document).ready(function(){
  $('#btn-test').click(function(){
    $('#test').toggle()
  });

  $('#btn-psych').click(function(){
    $('#pe').toggle()
  });

  // $('#test3').hover(function(){
  //   $('#pe1').fadeIn(500)
  
  // });

  // $('#test3').click(function(){
  //   $('#pe1').fadeOut(500)
  //   });


  //events

  //? hover event
  $('#p1').hover(function(){
    $(this).hide()
  })
 //? click event
  $('#p2').click(function(){
    $(this).hide()
  })
 //? dblclick event
  $('#p3').dblclick(function(){
    $(this).hide()
  })
 //?focus outside
  $('#p4').mouseout(function(){
    $(this).hide()
  })



  let menuTrigger = false;
  $(document).keypress(function(e){
    if(e.which == 13){
      if(menuTrigger === false){
        $('nav').fadeIn(500);
        menuTrigger=true;
      }
      else if(menuTrigger === true){
        $('nav').fadeOut(500);
        menuTrigger=false;
      }
    }
  })
})