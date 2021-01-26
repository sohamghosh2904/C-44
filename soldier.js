class soldier{
constructor(x,y,width,height){
this.body=Bodies.rectangle(x,y,width,height);
this.width=width;
this.height=height;
this.image=loadImage('soldier2.jpg');
World.add(world,this.body);

}
display(){
var pos=this.body.position;
pos.x=mouseX;
pos.y=mouseY;

//var angle=this.body.angle;
//push();
//translate(pos.x,pos.y);
//rotate(angle);
imageMode(CENTER);
image(this.image,this.width,this.height);
//pop();
}
}