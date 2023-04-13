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
