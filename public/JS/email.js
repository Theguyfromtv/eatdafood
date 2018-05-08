let=email="";

$(document).ready(function() {

  $('#modal1').modal({
    dismissible: false
  })
  $('#modal1').modal('open')

  email = $("#email").val().trim();

    $("#emailSubmit").on("click", function(){
      let url = window.location.href;
      window.location = url + "email="+email;
    })

  })

