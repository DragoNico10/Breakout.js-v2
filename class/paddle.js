class Paddle{
    constructor(){
        this.sprite=new Sprite(width/2,height-height/80, width/6,height/80,'kinematic')
        this.sprite.debug=true
    }
    draw(){
        if(kb.pressing('left')){
            this.sprite.x-=width/80
        }
        if(kb.pressing('right')){
            this.sprite.x+=width/80
        }
        if(this.sprite.x<width/12){
            this.sprite.x=width/12
        }
        if(this.sprite.x>width-width/12){
            this.sprite.x=width-width/12
        }
    }
}