const randomNumber = ():number=>parseInt((Math.random()*255).toString());



class RandomColor{
    randomColor:string

    constructor(){
        this.randomColor=`rgb(${randomNumber()},${randomNumber()},${randomNumber()})`
    }

    getColor(){
        return this.randomColor
    }
    printColor(){
        console.log(this.getColor());
        
    }
}


const randomColor = new RandomColor()
randomColor.printColor()