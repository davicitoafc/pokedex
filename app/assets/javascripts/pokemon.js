// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).on('ready', function() {

  $('#poke_dex > li > a').on('click', function(eventObject) {

    eventObject.preventDefault();

    $.ajax({
      url: $(this).attr('href'),
      method: 'GET',
      data: {},
      dataType: 'json'
    }).done(function(responseData) {

      console.log(responseData)

    })
  });
});
