class Player
{
constructor(){
    this.index=null
    this.name=null
}

getcount()
{
    var playercountref=database.ref('playercount');
    playercountref.on("value",function(data)
    {
       count=data.val()
    })

}
updatecount(count)
{
    database.ref ('/').update({
        playercount:count
    })
}
update()
{
    var playerindex ="player"+this.index
    database.ref (playerindex).set({
        name:this.name

        

    })
}
static getplayerinfo()
{
    var playerinforef=database.ref("player");
    playerinforef.on("value",(data)=>{
    allpersons=data.val();
    })
}
}



