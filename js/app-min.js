/* eslint-env jquery*/
function calculateSU(uni){
    var subnet = Math.floor(uni/16);
    var universe = uni - (subnet * 16);
    return 'ArtNet subnet: ' + subnet + '\nArtNet universe: '+universe;
}

function renderFixtAnswer(universe, elm){
    elm.html('<strong>'+calculateSU(universe)+'</strong>');
}
$('#fixture-form').submit(function() {
    event.preventDefault();
    var fixt = $('#fixtUni').val();
    $('#fixt-answer').show();
    renderFixtAnswer(fixt, $('#fixt-answer'));
});


