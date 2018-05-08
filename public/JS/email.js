let=email="";

$(document).ready(function() {

  $('#modal1').modal({
    dismissible: false
  })
  $('#modal1').modal('open')



    $("#emailSubmit").on("click", function(){
      email = $("#email").val().trim();
      let url = window.location.href;
      window.location = url + "email="+email;
    })

  })

