var backgroundImage
var form



function preload()
{
  backgroundImage=loadImage("images/jungle.jpg")



}
 function setup()
 {
   createCanvas(1000,600)
   form=new Form()
   form.display()
 }





function draw()
{
  background(backgroundImage)
  
  
   drawSprites()
   fill('yellow')
   text (mouseX+","+mouseY,mouseX,mouseY)
}