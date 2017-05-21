/* eslint-env jquery*/
//ALL  BASED ON FIXTURE UNIVERSE
function calculateSU(uni){
    var subnet = Math.floor(uni/16);
    var universe = uni - (subnet * 16);
    return 'ArtNet subnet: ' + subnet + '<br>ArtNet universe: '+universe;
}

function renderFixtAnswer(universe, elm){
    elm.html('<strong>'+calculateSU(universe)+'</strong>');
}

//All based on artnet sub and uni
function calculateFixtUni(arr){
    var ans = (arr[0]*16);
    // console.log(ans);
    ans += (arr[1]*1);
    // console.log(ans);
    return ans;
}

function renderSUAnswer(fixt, elm){
    //console.log(fixt);
    // console.log(calculateFixtUni(fixt));
    elm.html('Fixture universe: <strong>'+calculateFixtUni(fixt)+'</strong>');
}
$('#fixture-form').submit(function() {
    event.preventDefault();
    var fixt = $('#fixtUni').val();
    $('#fixt-answer').show();
    renderFixtAnswer(fixt, $('#fixt-answer'));
});
$('#console-form').submit(function(){
    event.preventDefault();
    //console.log(1);
    var arr=[];
    arr.push($('#sub').val());
    arr.push($('#uni').val());
    $('#console-answer').show();
    renderSUAnswer(arr, $('#console-answer'));
});
