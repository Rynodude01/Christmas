var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL("Christmas.jpg", function(Img){
        block_image = Img;
        block_image.scaleToWidth(900);
        block_image.scaleToHeight(500);
        block_image.set({
            top: 0, left: 0
        });
        canvas.add(block_image);
    });
}

function playSound()
{
	x.play();
}
