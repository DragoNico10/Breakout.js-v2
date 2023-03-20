class Ball{
    constructor(x,y,radius,id){
        this.sprite=new Sprite(x,y,radius,'kinematic')
        this.sprite.debug=true
        this.id=id
        this.rad=radius
        this.orig=[x,y]
        let pixels=`
..11
.1111
111111
111111
.1111
..11`
        let palette={'1':color(255,255,255)}
        this.sprite.img=spriteArt(pixels,round(radius)/6,palette)
    }
    draw(){
        if(gameState==0){
            this.sprite.x=paddle.sprite.x
            this.sprite.y=this.orig[1]
        }
    }
    start(){
        this.sprite.velocity.x=Math.floor(random(-4,5))
        this.sprite.velocity.y=Math.floor(random(-2,-5))
    }
}