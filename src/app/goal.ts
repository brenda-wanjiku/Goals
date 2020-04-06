export class Goal {
       /** 
       (1) id: number;
        name: string;
      }*/ 
   public showDescription: boolean;
    constructor(public id: number,public name: string,public description: string, public completeDate: Date /** added Date to constructor (pipe)  */){ 
      this.showDescription=false;
      this.id = 0;
      this.name = "Mary"
      this.description = "Has a little lamb"
}
}
