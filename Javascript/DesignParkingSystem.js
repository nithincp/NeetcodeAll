// Leetcode Problem - 1603

var ParkingSystem = function(big,small,medium){
    this.big = big
    this.bigCur = 0
    this.medium = medium
    this.mediumCur = 0
    this.small = small
    this.smallCur = 0
}

ParkingSystem.prototype.addCar = function(carType){
    if (carType === 1){
        if (this.bigCur<this.big){
            this.bigCur+=1
            return true
        }
        else{
            return false
        }
    }else if (carType === 2){
        if (this.mediumCur<this.medium){
            this.mediumCur+=1
            return true
        }else{
            return false
        }
    }else if (carType === 3){
        if (this.smallCur<this.small){
            this.smallCur+=1
            return true
        }
        else{
            return false
        }
    }
}