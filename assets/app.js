$(document).ready(function(){
// original array for buttons
var gifChoices = ["baboon", "aardvark", "badger", "otter", "elephant", "zebra", "lion", "cougar", "crocodile", "hippo", "rhino", "tiger"]

// making the array into buttons for the search
function makeButtons() {
  $('#button-to-click').empty();
  for (var i = 0; i < gifChoices.length; i++) {
    var newButton = $("<button class='button'>" + gifChoices[i] + "</button>");
    $(newButton).attr('id', 'animal-' + gifChoices[i]);
    newButton.on('click', getGifs)
    $('#button-to-click').append(newButton);
  };
};

// calling the function to make a button from the existing array
makeButtons();

// inputting an animal to add to the array
$('#submit').on('click', function (e) {
e.preventDefault()
  if ('#submit' !== '') {
    var addNewButton = $('#input').val();
    console.log(addNewButton)
    var newButton = $("<button class='button'>" + addNewButton + "</button>");
    $(newButton).attr('id', 'animal-' + addNewButton);
    newButton.on('click', getGifs)
    $('#button-to-click').append(newButton);
  }else{   
  }
})

// function for handling what to do with the click function
function getGifs(){
  var animal = $(this).text();
  console.log(animal)

  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=QChExzbZM9efkNsre9KVgykm36kNQmJd&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function (response) {
      console.log(response)
      var results = response.data;
      $("#gif-displays").empty();

      for (var index = 0; index < results.length; index++) {
        var gifImage = $('<img>');
        gifImage.attr("class", "gifs")
        gifImage.attr("src",results[index].images.fixed_height.url)
        $('#gif-displays').prepend(gifImage)
      }
    }) 
}
})