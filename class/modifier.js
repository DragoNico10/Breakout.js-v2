class Modifier{
    constructor(x,y,ballID){
        modifiers.push(this)
        this.sprite=new Sprite(x,y,40*longSide/1025,40*longSide/1025)
        this.sprite.vel.y=longSide/300
        this.id=ballID
        let int=Math.floor(random(0,101))
        if (int > 98) {
            this.type=5
        }
        else if (int > 75) {
            this.type=4
        }
        else if (int > 55) {
            this.type=3
        }
        else if (int > 35) { 
            this.type=2
        }
        else if (int > 20) {
            this.type=1
        }
        else if (int < 20) {
            this.type=0
        }
        this.setDrawType(this.type)
        balls.forEach(ball=>{
            this.sprite.overlaps(ball.sprite)
        })
        this.sprite.collides(paddle.sprite)
    }
    setDrawType(type){
        switch(type){
            case 0:
                this.sprite.draw = () => {
                    push()
                    fill('green')
                    rectMode(CENTER)
                    noStroke()
                    rect(0, 0, 40 * (longSide / 1025), 40 * (longSide / 1025))
                    fill('white')
                    ellipse(0, -10 * (longSide / 1025), 7 * (longSide / 1025))
                    ellipse(10 * (longSide / 1025), 10 * (longSide / 1025), 7 * (longSide / 1025))
                    ellipse(-10 * (longSide / 1025), 10 * (longSide / 1025), 7 * (longSide / 1025))
                    stroke(255)
                    strokeWeight(2 * (longSide / 1025))
                    line(4 * (longSide / 1025), -5 * (longSide / 1025), 9 * (longSide / 1025), 8 * (longSide / 1025))
                    line(-4 * (longSide / 1025), -5 * (longSide / 1025), -9 * (longSide / 1025), 8 * (longSide / 1025))
                    pop()
                } 
                break
            case 1:
                this.sprite.draw = () => {
                    push()
                    rectMode(CENTER)
                    fill('green')
                    noStroke()
                    rect(0, 0, 40 * (longSide / 1025), 40 * (longSide / 1025))
                    fill('white')
                    ellipse(10 * (longSide / 1025), -10 * (longSide / 1025), 7 * (longSide / 1025))
                    ellipse(-10 * (longSide / 1025), -10 * (longSide / 1025), 7 * (longSide / 1025))
                    rect(0 * (longSide / 1025), 10 * (longSide / 1025), 25 * (longSide / 1025), 5 * (longSide / 1025))
                    stroke(255)
                    strokeWeight(2 * (longSide / 1025))
                    line(10 * (longSide / 1025), -10 * (longSide / 1025), 3 * (longSide / 1025), 5 * (longSide / 1025))
                    line(-10 * (longSide / 1025), -10 * (longSide / 1025), -3 * (longSide / 1025), 5 * (longSide / 1025))
                    pop()
                }
                break
            case 2:
                
                this.sprite.draw = () => {
                    push()
                    rectMode(CENTER)
                    fill('cyan')
                    noStroke()
                    rect(0, 0, 40 * (longSide / 1025), 40 * (longSide / 1025))
                    fill('white')
                    triangle(5 * (longSide / 1025), 0, 0, -20 * (longSide / 1025), -5 * (longSide / 1025), 0)
                    triangle(0, 0, 10 * (longSide / 1025), -15 * (longSide / 1025), -5 * (longSide / 1025), -5 * (longSide / 1025))
                    triangle(0, 3 * (longSide / 1025), 0, -7 * (longSide / 1025), 15 * (longSide / 1025), -5 * (longSide / 1025))
                    triangle(15 * (longSide / 1025), 15 * (longSide / 1025), 0, -15 * (longSide / 1025), -5 * (longSide / 1025), 0)
                    triangle(5 * (longSide / 1025), 0, 0, 15 * (longSide / 1025), -5 * (longSide / 1025), 0)
                    triangle(5 * (longSide / 1025), 0, -10 * (longSide / 1025), -15 * (longSide / 1025), -5 * (longSide / 1025), 0)
                    triangle(15 * (longSide / 1025), 15 * (longSide / 1025), 0, -15 * (longSide / 1025), -5 * (longSide / 1025), 0)
                    triangle(0, 3 * (longSide / 1025), 0, -7 * (longSide / 1025), -15 * (longSide / 1025), 3 * (longSide / 1025))
                    fill('orange')
                    ellipse(0.5 * (longSide / 1025), -2.5 * (longSide / 1025), 7 * (longSide / 1025))
                    pop()
                }
                break
            case 3:
                
                this.sprite.draw = () => {
                    push()
                    rectMode(CENTER)
                    fill('blue')
                    rectMode(CENTER)
                    noStroke()
                    rect(0, 0, 40 * (longSide / 1025))
                    fill('white')
                    rect(0, 0, 15 * (longSide / 1025), 5 * (longSide / 1025))
                    stroke(255)
                    strokeWeight(2 * (longSide / 1025))
                    line(10 * (longSide / 1025), 0, 15 * (longSide / 1025), 0)
                    line(15 * (longSide / 1025), 0, 12 * (longSide / 1025), -3 * (longSide / 1025))
                    line(15 * (longSide / 1025), 0, 12 * (longSide / 1025), 3 * (longSide / 1025))
                    line(-10 * (longSide / 1025), 0, -15 * (longSide / 1025), 0)
                    line(-15 * (longSide / 1025), 0, -12 * (longSide / 1025), -3 * (longSide / 1025))
                    line(-15 * (longSide / 1025), 0, -12 * (longSide / 1025), 3 * (longSide / 1025))
                    pop()
                }
                break
            case 4:
                
                this.sprite.draw = () => {
                    push()
                    fill('red')
                    rectMode(CENTER)
                    noStroke()
                    rect(0, 0, 40 * (longSide / 1025))
                    fill('white')
                    rect(0, 0, 15 * (longSide / 1025), 5 * (longSide / 1025))
                    stroke(255)
                    strokeWeight(2 * (longSide / 1025))
                    line(10 * (longSide / 1025), 0, 15 * (longSide / 1025), 0)
                    line(10 * (longSide / 1025), 0, 13 * (longSide / 1025), -3 * (longSide / 1025))
                    line(10 * (longSide / 1025), 0, 13 * (longSide / 1025), 3 * (longSide / 1025))
                    line(-10 * (longSide / 1025), 0, -15 * (longSide / 1025), 0)
                    line(-10 * (longSide / 1025), 0, -13 * (longSide / 1025), -3 * (longSide / 1025))
                    line(-10 * (longSide / 1025), 0, -13 * (longSide / 1025), 3 * (longSide / 1025))
                    pop()
                }
                break
            default:
                break
        }
    }
}
/*let createPowerupSprite = (type, x, y, i) => {
    let this.sprite
    let longSide
    if (width < height)
        longSide = width
    else
        longSide = height
    
    //this one is more difficult because it uses stars
    if (type === 'levelFinish') {
        this.sprite = createSprite(x, y, 40, 40)
        this.sprite.draw = () => {
            push()
            if(particles.stars.tunp<=0){
                new Particle(random(x-40 * (longSide / 1025), x+40 * (longSide / 1025)), powerupSprites[powerupSprites.indexOf(this.sprite)].y, particles.stars.decay)
                particles.stars.tunp=particles.stars.defTunp
            }
            fill('gold')
            rectMode(CENTER)
            noStroke()
            rect(0, 0, 40 * (longSide / 1025))
            fill('white')
            rect(-3 * (longSide / 1025), 3 * (longSide / 1025), 50 / 3 * (longSide / 1025), 25 / 3 * (longSide / 1025))
            fill('red')
            ellipse(3 * (longSide / 1025), -3 * (longSide / 1025), 15 * (longSide / 1025))
            fill('gold')
            ellipse(3 * (longSide / 1025), -3 * (longSide / 1025), 10 * (longSide / 1025))
            stroke('red')
            strokeWeight(3 * (longSide / 1025))
            line(0, -8.5 * (longSide / 1025), 6 * (longSide / 1025), 2.5 * (longSide / 1025))
            pop()
            particles.stars.tunp--
        }
    }
    if (this.sprite) {
        this.sprite.type = type
        this.sprite.velocityY = (4 * speedMultiplier) * (height / 900)
        powerupSprites.push(this.sprite)
    }
}*/