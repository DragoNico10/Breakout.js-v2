class CPU{
    constructor(){
        this.model=tf.sequential()
        this.model.add(tf.layers.dense({inputShape:[4], units:32, activation:'relu'}))
        this.model.add(tf.layers.dense({units: 2, activation: 'linear'}))
        this.model.compile({loss: 'meanSquaredError', optimizer: tf.train.adam()})
        this.model.summary()
        this.buffer=[]
        this.exploration=0.1
        this.discount=0.99
        this.learnRate=0.001
        this.epochs=1000
        this.maxStepsPerEpoch=100
        this.epoch=0
        this.epochDone=false
    }
    train(){

    }
}