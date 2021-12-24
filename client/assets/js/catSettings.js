var colors = Object.values(allColors())

var defaultDNA = {
    "headColor" : 10,
    "mouthColor" : 13,
    "eyesColor" : 96,
    "tailColor" : 10,
    "pawsColor" : 22,
    "hornsColor": 33,
    //Cattributes
    "eyesShape" : 1,
    "decorationPattern" : 1,
    "decorationMidcolor" : 13,
    "decorationSidescolor" : 13,
    "animation" :  1,
    "lastNum" :  1
}

// when page load
$( document ).ready(function() {
    $('#dnabody').html(defaultDNA.headColor);
    $('#dnamouth').html(defaultDNA.mouthColor);
    $('#dnaeyes').html(defaultDNA.eyesColor);
    $('#dnatail').html(defaultDNA.tailColor);
    $('#dnapaws').html(defaultDNA.pawsColor);
    $('#dnahorns').html(defaultDNA.hornsColor);
    $('#dnashape').html(defaultDNA.eyesShape)
    $('#dnadecoration').html(defaultDNA.decorationPattern)
    $('#dnadecorationMid').html(defaultDNA.decorationMidcolor)
    $('#dnadecorationSides').html(defaultDNA.decorationSidescolor)
    $('#dnaanimation').html(defaultDNA.animation)
    $('#dnaspecial').html(defaultDNA.lastNum)

    renderCat(defaultDNA)
});

function getDna(){
    var dna = ''
    dna += $('#dnabody').html()
    dna += $('#dnamouth').html()
    dna += $('#dnaeyes').html()
    dna += $('#dnatail').html()
    dna += $('#dnapaws').html()
    dna += $('#dnahorns').html()
    dna += $('#dnashape').html()
    dna += $('#dnadecoration').html()
    dna += $('#dnadecorationMid').html()
    dna += $('#dnadecorationSides').html()
    dna += $('#dnaanimation').html()
    dna += $('#dnaspecial').html()

    return parseInt(dna)
}

function renderCat(dna){
    headColor(colors[dna.headcolor],dna.headcolor)
    $('#bodycolor').val(dna.headcolor)
    mouthColor(colors[dna.mouthColor],dna.mouthColor)
    $('#mouthcolor').val(dna.mouthColor)
    eyeColor(colors[dna.eyesColor],dna.eyesColor)
    $('#eyecolor').val(dna.eyesColor)
    tailColor(colors[dna.tailColor],dna.tailColor)
    $('#tailcolor').val(dna.tailColor)
    hornsColor(colors[dna.hornsColor],dna.hornsColor)
    $('#hornscolor').val(dna.hornsColor)
    $('#eyeshape').val(dna.eyesShape)
    collarVariation(dna.collarShape)
}

// Changing cat colors
$('#bodycolor').change(()=>{
    var colorVal = $('#bodycolor').val()
    headColor(colors[colorVal],colorVal)
})

$('#mouthcolor').change(()=>{
    var colorVal = $('#mouthcolor').val()
    mouthColor(colors[colorVal],colorVal)
})

$('#eyescolor').change(()=>{
    var colorVal = $('#eyescolor').val()
    eyesColor(colors[colorVal],colorVal)
})

$('#tailcolor').change(()=>{
    var colorVal = $('#tailcolor').val()
    tailColor(colors[colorVal],colorVal)
})

$('#pawscolor').change(()=>{
    var colorVal = $('#pawscolor').val()
    pawsColor(colors[colorVal],colorVal)
})

$('#hornscolor').change(()=>{
    var colorVal = $('#hornscolor').val()
    hornsColor(colors[colorVal],colorVal)
})

$('#eyeshape').change(()=>{
    var shape = parseInt($('#eyeshape').val())
    eyeVariation(shape)
})