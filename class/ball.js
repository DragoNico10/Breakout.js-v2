class Ball{
    constructor(x,y,radius){
        balls.push(this)
        this.sprite=new Sprite(x,y,radius)
        this.sprite.debug=true
        this.id=undefined
        let ids=[]
        balls.forEach(ball=>{
            ids.push(ball.id)
        })
        let tempId=1
        for(tempId;ids.includes(tempId);tempId=Math.floor(random(1,1001))){console.log('Id exists:'+tempId)}
        this.id=tempId
        console.log(tempId)
        this.sprite.bounciness=1
        this.rad=radius
        this.orig={x:x,y:y}
        let pixels=`
..11
.1111
111111
111111
.1111
..11`
        let palette={'1':color(255,255,255)}
        this.sprite.img=spriteArt(pixels,round(radius)/6,palette)
        balls.forEach(ball=>{
                this.sprite.overlaps(ball.sprite)
        })
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
        this.sprite.rotation=0
        if(this.sprite.y>height){
            this.removed=true
        }
        if(this.sprite.collides(edges)){
            let temp=random(sounds.ball_hit)
            temp.play()
        }
        /*fill(255)
        text(this.id,this.sprite.x,this.sprite.y+this.rad/2,15)*/
    }
    start(){
        this.sprite.velocity.x=Math.floor(random(-4,5))
        this.sprite.velocity.y=Math.floor(random(-2,-5))
    }
}