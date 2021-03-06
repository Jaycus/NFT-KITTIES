//Random color
function getColor() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor
}

function genColors(){
    var colors = []
    for(var i = 10; i < 99; i ++){
        var color = getColor()
        colors[i] = color
    }
    return colors
}

//This function code needs to modified so that it works with Your cat code.
function headColor(color,code) {
    $('.cat__head, .cat__chest').css('background', '#' + color)  //This changes the color of head and body
    $('#headcode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnabody').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function mouthColor(color,code) {
    $('.cat__mouth-contour').css('background', '#' + color)  //This changes the color of mouth
    $('#mouthcode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnamouth').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function eyesColor(color,code) {
    $('.cat__eye').css('background', '#' + color)  //This changes the color of eyes
    $('#eyescode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnaeyes').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function tailColor(color,code) {
    $('.cat__tail').css('background', '#' + color)  //This changes the color of eyes
    $('#tailcode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnatail').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function pawsColor(color,code) {
    $('.cat__paw-left, .cat__paw-left_inner, .cat__paw-right, .cat__paw-right_inner').css('background', '#' + color)  //This changes the color of eyes
    $('#pawscode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnapaws').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function hornsColor(color,code) {
    $('.cat__head-horn1, .cat__head-horn2').css('background', '#' + color)  //This changes the color of eyes
    $('#hornscode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnahorn').html(code) //This updates the body color part of the DNA that is displayed below the cat
}





//###################################################
//Functions below will be used later on in the project
//###################################################
function eyeVariation(num) {
    $('#dnashape').html(num)
    switch (num) {
        case 1:
            normalEyes()
            $('#eyeName').html('Basic')
            break
        case 2:
            normalEyes()
            $('#eyeName').html('Chill')
            eyesType1()
            break
        case 3:
            normalEyes()
            $('#eyeName').html('Scared')
            eyesType2()
            break
        case 4:
            normalEyes()
            $('#eyeName').html('Looks up')
            eyesType3()
            break
    }
}

function normalEyes() {
    $('.eye').css('border', 'none')
}

function eyesType1() {

    $('.eye').css('border-top', '8px solid')
    $('.inner_eye_big').css('width', '7px')
    $('.inner_eye_big').css('left', '15px')
    $('.inner_eye_small').css('display', 'none')
    $('.inner_eye_smallest').css('display', 'none')
}

function eyesType2() {
    normalEyes()
    $('.pupils').css('width', '10px')
    $('.pupils').css('left', '16px')
    $('.inner_eye_big').css('display', 'none')
    $('.inner_eye_small').css('display', 'none')
    $('.inner_eye_smallest').css('display', 'none')
}

function eyesType3() {
    normalEyes()
    $('.pupils').css('width', '24px')
    $('.pupils').css('left','14px' )
    $('.pupils').css('top', '0px')
    $('.inner_eye_big').css('width', '7px')
    $('.inner_eye_big').css('left', '15px')
    $('.inner_eye_small').css('display', 'none')
    $('.inner_eye_smallest').css('display', 'none')

}


function decorationVariation(num) {
    $('#dnadecoration').html(num)
    switch (num) {
        case 1:
            $('#decorationName').html('Basic')
            normaldecoration()
            break
    }
}

async function normalEyes() {
    await $('.cat__eye').find('span').css('border', 'none')
}

async function normaldecoration() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    $('.cat__head-dots').css({ "transform": "rotate(0deg)", "height": "48px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.cat__head-dots_first').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}