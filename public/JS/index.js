

$(document).ready(function() {

  let url= window.location.href

  let emailArr=url.split("=")

  let email = emailArr[1]

  
    let search={};
  
    $("#search").on("click",function(){
      let query=$("#burgerText").val().trim()
      $.ajax({
          url: "https://api.edamam.com/search?q="+query+"&app_id=c359db3b&app_key=c01d784ec3d3816bd43efde5cf935ae4",
          method: "GET",
      }).then(function(response) {
          console.log(response);
          search=response;
          for (let i = 0; i<search.hits.length; i++){
            $("#area").append("<div class='col l6 m12'id='col"+i+"'>");
            $("#col"+i).append("<div class='card'id='card"+i+"'>");
            $("#card"+i).append("<div class='card-image'id='cardimg"+i+"'>");
            $("#cardimg"+i).append("<img class='cardImage' src='"+search.hits[i].recipe.image+"' width='200'>");
            $("#cardimg"+i).append("<span class='card-title'>"+search.hits[i].recipe.label+"</span>")
            $("#card"+i).append("<div class='card-action group'id='cardAction"+i+"'>");
            $("#cardAction"+i).append("<a class='waves-effect waves-light btn left' id='addCard' data-link='"+search.hits[i].recipe.url+"' data-image='"+search.hits[i].recipe.image+"' data-name='"+search.hits[i].recipe.label+"'>Add it!</a>");
            $("#cardAction"+i).append("<a class='waves-effect waves-light btn right' href='"+search.hits[i].recipe.url+"'>Recipe</a>");
        }
    })
    })
  
  $(document).on("click", "#addCard", function(){
  
    let burgerLink = $(this).data("link");
    let burgerImage= $(this).data("image");
    let burgerLabel= $(this).data("name");
  
    let newBurger={link:burgerLink, image: burgerImage, label: burgerLabel}
  
    $.ajax("/api/addBurger/"+email, {
          type: "POST",
          data:newBurger
        }).then(
          function(){
            console.log("added burger");
            location.reload();
          })
  
    })
  
  
  
  
  $(document).on("click", ".remove", function(){
  
    console.log("click")
  
    let id = $(this).data("id")
  
    let object = {data:id}
    
  
    $.ajax("/api/moveBurger", {
          type: "PUT",
          data:object
        }).then(
          function(){
            console.log("moved burger");
            location.reload();
          })
  
    })
  
  
  })
  