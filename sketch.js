var title;
var content;
var end 
var button;
var background;
var end1;


function setup() {
  createCanvas(1300,600);
  
  title = createElement('h2')
  title.html("Happy Teacher's Day");
  title.position(510, 100);

  content= createElement('h3')
  content.html("Dear Mam, You did everything to make your class fun and exicting. I am learing so much from you.You made me love CODING in In a way I never thought I would. You helped me improve a lot... You made me much faster than I was! That smile on your face and happiness in the hour makes me continue coding.Makes coding always fun !");
  content.position(530, 230);

  end = createElement('h2')
  end.html("My best wishes to you mam!");
  end.position(700, 330);
  
  button = createButton('Continue');
  button.position(530, 630);
 
  this.button.mousePressed(() => {
    
        this.button.hide();
        this.title.hide();
        this.content.hide();
        this.end.hide();
        background("Teacher.jpg")
        end1 = createElement('h2')
        end1.html("Thank You Mam!");
        end1.position(530, 630);
    
});


}

function draw() {
  background("Teacher.jpg");  
  drawSprites();
  
}