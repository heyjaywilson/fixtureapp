/* eslint-env jquery*/
function calculateSU(uni){
    var subnet = Math.floor(uni/16);
    var universe = uni - (subnet * 16);
    return 'ArtNet subnet:' + subnet + '\nArtNet universe: '+universe;
}

function renderFixtAnswer(universe, elm){
    elm.html(calculateSU(universe));
}
$('#fixture-form').submit(function() {
    event.preventDefault();
    var fixt = $('#fixtUni').val();
    renderFixtAnswer(fixt, $('#fixt-answer'));
});
