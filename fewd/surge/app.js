let gray = $('#grayButton' )
gray.click(changeColors)
let blue = $('#blueButton')
blue.click(changeColors)

function changeColors() {
  // this will work with either event as a param or not but will display slightly diff content
  let body = $('body')
  let dataColor = $(this).attr('data-color')
  body.css({'background-color':dataColor})
}


