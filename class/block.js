class Block{
    constructor(x,y,w,h){
        this.sprite=new Sprite(x,y,w,h,'static')
        this.sprite.sleeping=true
        this.removed=false
        blocks_pos.push([x,y,w,h])
        //this.sprite.debug=true
    }
    run(){
        if(this.removed==false){
            balls.forEach(ball => {
                if(this.sprite.collides(ball.sprite)){
                    if(ball.type=='normal'){
                        let temp=random(sounds.ball_hit)
                        temp.play()
                        this.removed=true
                    }else if(ball.type=='explosive'){
                        sounds.explotion.play()
                        ball.explode()
                        this.removed=true
                    }else if(ball.type=='explotion'){
                        this.removed=true
                    }
                    if(Math.floor(random(0,101))>70){
                        new Modifier(this.sprite.x,this.sprite.y,ball.id)
                    }
                    blocksLeft--
                }
            })
        }else if(this.removed==true&&!this.sprite.removed){
            this.sprite.remove()
            this.removed=null
        }
    }
}