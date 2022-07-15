//create an object for colors. These will be the correct colors we choose from
// We need a variable for the color that is correct
// we need a object for random colors
// all colors are buttons
//button for hard and easy 
// one object for easy and hard colors
// button to redo colors
function Click(colorNum, objColor){
  document.querySelector(colorNum).addEventListener('click', function(){
      tries--
      document.querySelector('.try').textContent = 'Tries:' + tries
      console.log(tries)
    if(colorPicker == objColor){
      document.querySelector('.congrats').textContent = "Congrats!!"
    }
    else if(tries == 0){
  
      document.querySelector('.congrats').textContent = "You Lost!!"
    }
   
  
  });}

function randomRgbColor() {
  let r = Math.ceil(Math.random()*255);
  let g = Math.ceil(Math.random()*255);
  let b = Math.ceil(Math.random()*255);
  return r +',' + g + ',' + b;
}

let colorCss = {
    color1: randomRgbColor(),
    color2: randomRgbColor(),
    color3: randomRgbColor(),
    color4: randomRgbColor(),
    color5: randomRgbColor(),
    color6: randomRgbColor(),
}
let correctColor = ''
let obj = Object.values(colorCss)
let colorPicker = obj[Math.floor(Math.random() * obj.length)]
let tries = 3;


document.addEventListener('DOMContentLoaded',() => {

// created so we had the random correct color added to text 
document.querySelector('.rightcolor').textContent = 'RGB ' + colorPicker;


//Setting the random colors
document.querySelector('.color1').style.backgroundColor =  'rgb(' + colorCss.color1 + ')'
document.querySelector('.color2').style.backgroundColor = 'rgb(' + colorCss.color2 + ')'
document.querySelector('.color3').style.backgroundColor = 'rgb(' + colorCss.color3 + ')'
document.querySelector('.color4').style.backgroundColor = 'rgb(' + colorCss.color4 + ')'
document.querySelector('.color5').style.backgroundColor = 'rgb(' + colorCss.color5 + ')'
document.querySelector('.color6').style.backgroundColor = 'rgb(' + colorCss.color6 + ')'


Click('.color1', colorCss.color1)
Click('.color2', colorCss.color2)
Click('.color3', colorCss.color3)
Click('.color4', colorCss.color4)
Click('.color5', colorCss.color5)
Click('.color6', colorCss.color6)


});


