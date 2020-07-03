class Player {
  constructor(){
    this.username = null;
    this.PlayerCount = 0;
    this.OnChallenges = [];
    this.friends = [];
  }

  updatePlayerInfo(){
    database.ref("/").update({
      
    })
  }

  getPlayerInfo(){
    var playerInfoRef = database.ref('players');

    playerInfoRef.on("value",(data) =>{
      allPlayers = data.val();
    })
  }

}
