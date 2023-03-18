var balls=[], blocks_padded=[], paddle, modifiers=[], sounds={modifier_get:[], ball_hit:[], game_over:[]}, gameState

var preload=()=>{
    sounds.modifier_get.push(loadSound('sfx/modifier_get_good.wav'), loadSound('sfx/modifier_get_bad.wav'))
}

var setup=()=>{
    new Canvas(innerWidth, innerHeight)
    balls.push(new Ball(innerWidth/2, innerHeight-(innerHeight/5),30 ))
    paddle=new Paddle()
}

var draw=()=>{
    clear()
    background(64)
}