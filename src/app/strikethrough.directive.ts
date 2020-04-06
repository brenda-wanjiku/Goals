import { Directive ,ElementRef ,HostListener} from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

 /** constructor(private elem:ElementRef){
    this.elem.nativeElement.style.textDecoration='line-through';} // strikes all goals*/

    constructor(private elem:ElementRef){ }

    @HostListener("click") onClicks(){ /** Hostlistener initiated by user actions */
      this.textDeco("line-through")
    }
  
    @HostListener("dblclick") onDoubleClicks(){
      this.textDeco("None")
    }

    private textDeco(action:string){
      this.elem.nativeElement.style.textDecoration=action; /** function takes in action performs textDecoration using action*/
  
    } 
  

}
