

var gifChoices = ["baboon", "aardvark", "badger", "otter", "elephant", "zebra", "lion", "cougar", "crocodile", "hippo", "rhino", "tiger"]


function makeButtons() {
  $('#search-button').empty();
  for (var i = 0; i < gifChoices.length; i++) {
    var newButton = $("<button class='button'>" + gifChoices[i] + "</button>");
    $(newButton).attr('id', 'animal-' + gifChoices[i]);
    $('#search-button').append(newButton);
  };
};
makeButtons();

// inputting an animal to add to the finder
$('#submit').on('click', function () {
  if ('#submit' === '') {
  } else {
    var addNewButton = $('input').val();
    $(gifChoices).html($('<button class="button new-button"></button>'));
    $('.new-button').text(addNewButton);
  }
})


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

      for (var index = 0; index < response.data.length; index++) {
        var gifDiv = $('<div>');
        var gifImage = $('<img>');
        gifImage.attr("src",results[index].images.fixed_height.url)
        $(gifDiv).append(gifImage)
        $('#gif-displays').prepend(gifDiv)
      }

    })



})


