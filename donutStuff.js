export default class donutStuff{

constructor () {
    //any variables that need stored
    this.donutCount = 0;
    this.autoClicker = 0;
    this.multipliers = 0;
    this.autoClickCost = 30;
    this.multipliersCost = 25;
    this.autoBuyEnabled = true;
    this.multiBuyEnabled = false;
   
}





//addDonut
 donutClick() {
        //multiplier bonus
        if (this.multipliers === 0) {
            this.donutCount += 1;
        } else {
            this.donutCount += Math.pow(1.2, this.multipliers);
        }
        //enable buy buttons
        if (this.donutCount >= this.autoClickCost) {
            this.autoBuyEnabled = true;
        }
        if (this.donutCount >= this.multipliersCost) {
            this.multiBuyEnabled = true;
        }
    }

    buyAutoClicker() {
        //buy auto clickers & the multipliers
        this.donutCount -= this.autoClickCost;
        this.autoClicker += 1;
        this.autoClickCost += this.autoClickCost * .3;
        if (this.donutCount < this.multipliersCost) {
            this.multiBuyEnabled = false;
        }
        if (this.donutCount < this.autoClickCost) {
            this.autoBuyEnabled = false;
        }
    }

    buyMultiplier() {
        this.donutCount -= this.multipliersCost;
        this.multipliers += 1;
        this.multiplierCost += this.multipliersCost * 2;
        if (this.donutCount < this.multipliersCost) {
            this.multiBuyEnabled = false;
        }
        if (this.donutCount < this.autoClickCost) {
            this.autoBuyEnabled = false;
        }
    }




    resetGame(){
        location.reload;
    }









































}