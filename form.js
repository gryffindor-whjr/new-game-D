class Form{
constructor(){

    
}


display(){
var title=createElement('h2o');
    title.html("vroom vroom")
    title.position(130,0)

var input=createInput("name here now")
input.position(130,160)
var button=createButton("dont click");
button.position(250,200)

button.mousePressed(function(){
    input.hide();
    button.hide();

    var name = input.value();
    
    playerCount+=1;
    player.update(name)
    player.updateCount(playerCount);
    
    var greeting = createElement('h3');
    greeting.html("you still here " + name )
    greeting.position(130, 160)
  });
}

}