class Paddle{
    constructor(){
        this.sprite=new Sprite(width/2,height-height/80, width/6,height/80,'kinematic')
    }
    draw(){
        if(pressing==0){
            this.sprite.vel.x=0-width/160
        }else if(pressing==2){
            this.sprite.vel.x=width/160
        }else{
            this.sprite.vel.x=0
        }
        modifiers.forEach(modifier => {
            if(this.sprite.collides(modifier.sprite)){
                console.log('collide')
                switch(modifier.type){
                    case 0:
                        let target
                        for(let ball of balls){
                            if(ball.id==modifier.id){
                                target=ball
                                break
                            }
                        }
                        new Ball(target.sprite.x,target.sprite.y,longSide/30,width/400,-height/400)
                        new Ball(target.sprite.x,target.sprite.y,longSide/30,-width/400,-height/400)
                        sounds.modifier_get[0].play()
                        break
                    case 1:
                        new Ball(paddle.sprite.x,paddle.sprite.y-height/90,longSide/30,width/200,height/200)
                        new Ball(paddle.sprite.x,paddle.sprite.y-height/90,longSide/30,-width/200,height/200)
                        sounds.modifier_get[0].play()
                        break
                    case 2:
                        new Ball()
                        sounds.modifier_get[0].play()
                        break
                    case 3:
                        sounds.modifier_get[0].play()
                        break
                    case 4:
                        sounds.modifier_get[1].play()
                        break
                    default:
                        sounds.modifier_get[0].play()
                        break
                }
                modifier.sprite.remove()
                modifiers.splice(modifiers.indexOf(modifier),1)
            }
        });
        if(this.sprite.x<width/12){
            this.sprite.x=width/12
        }
        if(this.sprite.x>width-width/12){
            this.sprite.x=width-width/12
        }
    }
}
