

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
    // button function
    // $('#search-button').empty();
    var searchInput = $('#submit').text();
    $(gifChoices).append(searchInput);
    // append button
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

      for (var index = 0; index < response.data.length; index++) {
        $('#gif-displays').html(response.data.index[i].images.fixed_height.url);

      }

    })

  // var results = response.data;


})


