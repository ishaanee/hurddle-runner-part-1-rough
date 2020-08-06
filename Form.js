class Form{
    constructor(){
this.input=createInput("Name");
this.button=createButton("Play");
this.greeting =createElement("h3");

        
    }

    hide()
        {
            this.greeting.hide()
            this.button.hide()
            this.input.hide()
            
        }
    
    display()
    {
        var title=createElement('h1')
        title.html("HORIZONTAL HURDLES GAME");
        title.position(170,50);
        this.input.position(170,160);

        this.button.position(290,200)
       
        this.button.mousePressed(()=>

        {
    this.input.hide()
    
    this.button.hide()
    player.name= this.input.value();
    
    count=count+1;
    player.index=count;
    player.update();
    player.updatecount(count);
    this.greeting.html("Let's play "+player.name);
    this.greeting.position(150,130);
    this.greeting1.html("Hope you had fun"+player.name);
    this.greeting1.position(160,130);





        })
        
    }
}