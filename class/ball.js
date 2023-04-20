class Ball{
    constructor(x,y,radius,vX=0,vY=0,type='normal'){
        balls.push(this)
        this.sprite=new Sprite(x,y,radius)
        this.sprite.vel.x=vX
        this.sprite.vel.y=vY
        this.type=type
        this.id=undefined
        let ids=[]
        balls.forEach(ball=>{
            ids.push(ball.id)
        })
        let tempId=1
        for(tempId;ids.includes(tempId);tempId=Math.floor(random(1,1001))){console.log('Id exists:'+tempId)}
        this.id=tempId
        this.sprite.bounciness=1
        this.rad=radius
        this.orig={x:x,y:y}
        balls.forEach(ball=>{
                this.sprite.overlaps(ball.sprite)
        })
        if(type=='normal'){
            this.sprite.color=255
        }else if(type=='explosive'){
            this.sprite.color='orange'
        }
    }
    draw(){
        if(this.removed==true){
            this.sprite.remove()
            balls.splice(balls.indexOf(this),1)
        }
        if(gameState==0){
            this.sprite.x=paddle.sprite.x
            this.sprite.y=this.orig.y
        }
        if(this.sprite.y>height+this.rad/2){
            this.removed=true
        }
        if(this.sprite.collides(edges)||this.sprite.collides(paddle.sprite)){
            let temp=random(sounds.ball_hit)
            temp.play()
        }
        /*fill(255)
        text(this.id,this.sprite.x,this.sprite.y+this.rad/2,15)*/
    }
    start(){
        this.sprite.direction=random(-125,-45)
        this.sprite.speed=longSide/200
    }
}