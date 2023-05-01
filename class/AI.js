class CPU{
    constructor(){
        this.model=tf.sequential()
        this.model.add(tf.layers.dense({inputShape:[50], units:32, activation:'relu'}))
        this.model.add(tf.layers.dense({units: 2, activation: 'linear'}))
        this.model.compile({loss: 'meanSquaredError', optimizer: tf.train.adam()})
        this.buffer=[]
        this.exploration=0.1
        this.discount=0.99
        this.learnRate=0.001
        this.episodes=1000
        this.maxStepsPerEpisode=100
        this.episode=0
    }
    train(){
    }
    nextEpisode(){
        this.episode++
    }
}