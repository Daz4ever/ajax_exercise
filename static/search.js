$(document).ready(function() {
  $('#search-form').submit(function(event) {
    event.preventDefault();
    var text = $('#search').val();
    // var queryData = $('#search-form').serialize();
    var queryData = { 'search': text };
    $.get('/search', queryData, function(data) {
      //empties the shown search results
      $('#result-list').html('');
      data.forEach(function(result) {
        var html = '<li><a href="' + result.url + '">' +
          result.title + '</a></li>';
        $('ul#result-list').append(html);
      });
    });
  });


});
