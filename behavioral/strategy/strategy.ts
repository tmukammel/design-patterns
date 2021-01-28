/**
 * Date: 02/02/2020
 * Topic: Strategy pattern 
 */

interface ILunch {
    takeLunch(): void;
  }
  
  class LunchBurger implements ILunch {
    takeLunch() {
      console.log(`I take American Burger`);
    }
  }
  
  class LunchPizza implements ILunch {
    takeLunch() {
      console.log(`I take Pizza`);
    }
  }
  
  interface IGoHome {
    goHome(): void;
  }
  
  class GoHomeWithCar implements IGoHome {
    goHome() {
      console.log(`I go home with Car`);
    }
  }
  
  class GoHomeWithBus implements IGoHome {
    goHome() {
      console.log(`I go home with Bus`);
    }
  }
  
  class OfficePersonal {
    private _lunch: ILunch;
    private _goHome: IGoHome;
  
    constructor(lunch: ILunch, goHome: IGoHome) {
      this._lunch = lunch;
      this._goHome = goHome;
    }
  
    getLunchBehavior(): ILunch {
      return this._lunch;
    }
  
    getGoHomeBehavior(): IGoHome {
      return this._goHome;
    }
  }
  
  function execute() {
    // CEO
    console.log(`I am CEO Imran`);
    let ceoLunch = new LunchPizza();
    let ceoGoHome = new GoHomeWithCar()
    let ceo: OfficePersonal = new OfficePersonal(ceoLunch, ceoGoHome);
    ceo.getLunchBehavior().takeLunch();
    ceo.getGoHomeBehavior().goHome();
  
    // Peon
    console.log(`I am Peon Twaha`);
    let peonLunch = new LunchBurger();
    let peonGoHome = new GoHomeWithBus()
    let peon: OfficePersonal = new OfficePersonal(peonLunch, peonGoHome);
    peon.getLunchBehavior().takeLunch();
    peon.getGoHomeBehavior().goHome();
  }
  
  execute();
  
  
  