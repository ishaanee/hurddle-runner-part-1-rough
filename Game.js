class Game {
    constructor(){}

     getstate ()
     {
         var gamestateref=database.ref('gamestate');
         gamestateref.on("value",function(data){
            gamestate=data.val()

         })
     }
     update(state)
     {
         database.ref ('/').update({
             gamestate:state
         })

         
     }
async start ()
{
    if (gamestate===0)
    {
        player=new Player();
        var playercountref=await database.ref('playercount').once("value");
    if (playercountref.exists()){
        count=playercountref.val();
        player.getcount();}
        form=new Form();
        form.display();
    }
    
}

play(){
    form.hide();

    //text("Game start", 120, 100);
    
   

    
    
drawSprites();
}
end(){
if(gamestate===2)
 {
   console.log("gameover")
   text("gameover",displayWidth/2,1500)
   game.update(2)
   console.log(player.rank)
 }
}

}
