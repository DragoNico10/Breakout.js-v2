// create all variables
var balls=[], blocks_padded=[], paddle, modifiers=[], sounds={modifier_get:[], ball_hit:[], game_over:[]}, gameState=0,edges,blocksLeft=0,blocks_pos=[]
//if height is longer than width, and viceversa
var longSide
var pressing=1
var cpu=new CPU()
//Load sounds
var preload=()=>{
    sounds.modifier_get.push(loadSound('sounds/modifier_get_good.wav'), loadSound('sounds/modifier_get_bad.wav'))
    for (let index = 1; index < 7; index++) {
        sounds.ball_hit.push(loadSound('sounds/ball_hit'+index+'.wav'))
    }
}
//Setup function
var setup=()=>{
    //initialize
    new Canvas(innerWidth/3,innerHeight/3,'pixelated')
    longSide=width>height?width:height
    //making the game feel more retro by simulating low frame rate
    frameRate(20)
    //Ball is a class listed in another file, like Paddle and Group
    new Ball(width/2, height-(height/10),longSide/30)
    paddle=new Paddle()
    //Making edges but not at the bottom
    edges=new Group()
    new edges.Sprite(width+width/2,height/2,width,height*2,'static')
    new edges.Sprite(0-width/2,height/2,width,height*2,'static')
    new edges.Sprite(width/2,0-height/2,width*2,height,'static')
    //creating blocks in a 2D array
    let y=height/25
    for(let rows=0;rows<10;rows++){
        let x=width/40
        let arr=[]
        for(let columns=0;columns<20;columns++){
            arr.push(new Block(x,y,50*width/1300,25*height/700))
            blocksLeft++
            x+=width/20
        }
        y += height / 20
        blocks_padded.push(arr)
    }
    
    gameState=1
    balls[0].start()

}
//count the frames that have passed
let frames=0
//Game loop
var draw=()=>{
    rectMode('center')
    strokeWeight(0)
    clear()
    background(64)
    //execute the sprites draw functions
    paddle.draw()
    balls.forEach(ball => {
      ball.draw()  
    });
    blocks_padded.forEach(row=>{
        row.forEach(block=>{
            block.run()
        })
    })
    //to experiment what happens when more balls are on screen
    /*if(frames%10==0&&gameState==1){
        let temp=new Ball(innerWidth/2, innerHeight-(innerHeight/10),longSide/30)
        temp.start()
    }*/
    frames+=1
    strokeWeight(1)
    if(balls.length==0){
        gameOver()
    }
}

var gameOver=()=>{
    gameState=0
    CPU.epochDone=true
    new Ball(width/2, height-(height/10),longSide/30)
    blocks_padded.forEach(row => {
        row.forEach(block => {
            block.removed=true
            block.run()
        })
    });
    blocks_padded=[]
    blocksLeft=0
    frames=0
    modifiers.forEach(modifier=>{
        modifier.sprite.remove()
    })
    modifiers=[]
    let y=height/25
    for(let rows=0;rows<10;rows++){
        let x=width/40
        let arr=[]
        for(let columns=0;columns<20;columns++){
            arr.push(new Block(x,y,50*width/1300,25*height/700))
            blocksLeft++
            x+=width/20
        }
        y += height / 20
        blocks_padded.push(arr)
    }
    gameState=1
    balls[0].start()
}