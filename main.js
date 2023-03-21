var balls=[], blocks_padded=[], paddle, modifiers=[], sounds={modifier_get:[], ball_hit:[], game_over:[]}, gameState=0,edges
var longSide
var preload=()=>{
    sounds.modifier_get.push(loadSound('sounds/modifier_get_good.wav'), loadSound('sounds/modifier_get_bad.wav'))
    for (let index = 1; index < 7; index++) {
        sounds.ball_hit.push(loadSound('sounds/ball_hit'+index+'.wav'))
    }
}

var setup=()=>{
    new Canvas(innerWidth, innerHeight)
    longSide=width>height?width:height
    new Ball(innerWidth/2, innerHeight-(innerHeight/10),longSide/30)
    paddle=new Paddle()
    frameRate(20)
    edges=new Group()
    new edges.Sprite(width+width/2,height/2,width,height*2,'static')
    new edges.Sprite(0-width/2,height/2,width,height*2,'static')
    new edges.Sprite(width/2,0-height/2,width*2,height,'static')
}
let frames=0
var draw=()=>{
    rectMode('center')
    clear()
    background(64)
    paddle.draw()
    balls.forEach(ball => {
      ball.draw()  
    });
    if(gameState==0){
        if(kb.presses('space')){
            gameState=1
            balls[0].start()
        }
    }
    /*if(frames%10==0&&gameState==1){
        let temp=new Ball(innerWidth/2, innerHeight-(innerHeight/10),longSide/30)
        temp.start()
    }*/
    frames+=1
}