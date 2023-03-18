class Ball{
    constructor(x,y,radius,id,startBall=false){
        this.sprite=new Sprite(x,y,radius)
        this.sprite.debug=true
        this.id=id
        this.followPaddle=false
        if (startBall==true){
            this.followPaddle=true
        }
        let pixels=`
..11
.1111
111111
111111
.1111
..11`
        let palette={'1':color(255,255,255)}
        this.sprite.img=spriteArt(pixels,radius/6,palette)
    }
}