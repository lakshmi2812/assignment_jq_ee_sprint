$(document).ready(function(){
    // var event_obj = {
    //   remainingChar: function(max_char){
    //       var inp_len = $(this).val().length;
    //       var remaining = max_char-inp_len;
    //       if(inp_len > 0 && inp_len <= max_char){
    //         $('#count_down').val(remaining);
    //       }else if(inp_len > max_char){
    //         $('#count_down').val(0);
    //       }else{
    //         $('#count_down').val("");
    //       }
    //   }
    // };
    // $("#yourname").keyup(event_obj.remainingChar(32));

    $("#your_name").keyup(function(){
      var inp_len = $(this).val().length;
      var max_char = 32;
      var remaining = max_char-inp_len;
      if(inp_len > 0 && inp_len <= max_char){
        $('#name_count_down').val(remaining);
      }else if(inp_len > max_char){
        $('#name_count_down').val(0);
      }else{
        $('#name_count_down').val("");
      }
    });

    $("#comments").keyup(function(){
      var inp_len = $(this).val().length;
      var max_char = 140;
      var remaining = max_char-inp_len;
      if(inp_len > 0 && inp_len <= max_char){
        $('#comments_count_down').val(remaining);
      }else if(inp_len > max_char){
        $('#comments_count_down').val(0);
      }else{
        $('#comments_count_down').val("");
      }
    });

    $("#pwd").keyup(function(){
      var inp_len = $(this).val().length;
      var max_char = 16;
      var remaining = max_char-inp_len;
      if(inp_len > 0 && inp_len <= max_char){
        $('#pwd_count_down').val(remaining);
      }else if(inp_len > max_char){
        $('#pwd_count_down').val(0);
      }else{
        $('#pwd_count_down').val("");
      }
    });

    $("#confirm_pwd").keyup(function(){
      var inp_len = $(this).val().length;
      var max_char = 16;
      var remaining = max_char-inp_len;
      if(inp_len > 0 && inp_len <= max_char){
        $('#confirm_count_down').val(remaining);
      }else if(inp_len > max_char){
        $('#confirm_count_down').val(0);
      }else{
        $('#confirm_count_down').val("");
      }
    });

    $("#confirm_pwd").keyup(function(){
      var pwd_val = $("#pwd").val();
      var pwd_confirm_val = $(this).val();
      var inp_len = $(this).val().length;
      if(inp_len > 0){
        if(pwd_val !== pwd_confirm_val){
          $("#pwd_confirm_msg").val("Password does not match!");
        }else{
          $("#pwd_confirm_msg").val("");
        }
      }else{
        $("#pwd_confirm_msg").val("");
      }
    });

    $("#submit").click(function(event){
      event.preventDefault();
      var name_len = $("#your_name").val().length;
      var pwd_len = $("#pwd").val().length;
      var textarea_len = $("#comments").val().length;
      if(name_len < 4 || name_len > 32){
        console.log("Name is wrong");
      }
      if(pwd_len <6 || pwd_len > 16){
        console.log("Bad pwd");
      }
      if(textarea_len < 4 || textarea_len > 140){
        console.log("Bad comments");
      }
    });
    var $drop_down = $("#comments_count_down").after('<ul id = "drop_down"><li></li>'+
                '<li class = "child">Dog</li>'+
                '<li class = "child">Puppy</li>'+
                '<li class = "child">Sloth</li></ul>');
    $(".child").hover(function(event){
      $(this).slideDown(100)
              .css('background-color', '#fafdfc');
    });
    //$("ul").slideUp(10000);
});
