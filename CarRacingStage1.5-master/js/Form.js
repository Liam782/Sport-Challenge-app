class Form {

  constructor() {
    this.username = createInput("User Name");
    this.SignInbutton = createButton('SIGN IN');
    this.signIn = createButton('Sign In');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('RESET');
  }
  hide(){
    this.greeting.hide();
    this.username.hide();
    this.title.hide();
    this.SignInbutton.hide();
  }

  display(){
    this.title.html("Challenge App");
    this.title.position(displayWidth/2 - 50, 0);

    this.SignInbutton.position(displayWidth/2 - 50, 200);

    this.reset.position(displayWidth/2 - 100,20);

    this.SignInbutton.mousePressed(()=>{
      this.username.position(displayWidth/2,displayHeight/2 - 100);
      this.signIn.position(displayWidth/2,displayHeight/2 + 100);

      this.SignInbutton.hide();
      
        this.signIn.mousePressed(()=>{
          this.username.hide();
          this.signUp.hide();

          player.name = this.username.value();
          player.password = this.password.value();
          //playerCount+=1;
          //player.index = playerCount;
          player.update();
          //player.updateCount(playerCount);
          this.greeting.html(player.name + " has succefully logged in!");
          this.greeting.position(displayWidth/2 - 120, displayHeight/2);
        })
    });

    this.SignInbutton.mousePressed(()=>{
      this.username.position(displayWidth/2,displayHeight/2 - 100);
      this.password.position(displayWidth/2,displayHeight/2);
      this.signIn.position(displayWidth/2,displayHeight/2 + 100);
      
      player.name = this.username.value();
      player.password = this.password.value();
      //playerCount+=1;
      //player.index = playerCount;
      //Call the Function isPlayer
      //make if else statement when password or username is incorrect or correct
      //player.updateCount(playerCount);
      this.greeting.html(player.name + " has succefully logged in");
      this.greeting.position(displayWidth/2 - 120, displayHeight/2);
    });

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
    });

  }
}
