

var gifChoices = ["baboon", "aardvark", "badger", "otter", "elephant", "zebra", "lion", "cougar", "crocodile", "hippo", "rhino", "tiger"]

// making the array into buttons for the search
function makeButtons() {
  $('#button-to-click').empty();
  for (var i = 0; i < gifChoices.length; i++) {
    var newButton = $("<button class='button'>" + gifChoices[i] + "</button>");
    $(newButton).attr('id', 'animal-' + gifChoices[i]);
    $('#button-to-click').append(newButton);
  };
};

makeButtons();

// inputting an animal to add to the finder
$('#submit').on('click', function () {
  if ('#submit' !== '') {
    var addNewButton = $('#input').text();
    gifChoices.push(addNewButton);
    makeButtons();
  }else{   
  }
})

// on click function to register array search
$('.button').on('click', function () {
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

      for (var index = 0; index < results.length; index++) {
        var gifDiv = $('<div>');
        var gifImage = $('<img>');
        gifImage.attr("src",results[index].images.fixed_height.url)
        $(gifDiv).append(gifImage)
        $('#gif-displays').prepend(gifDiv)
      }
    })
})


