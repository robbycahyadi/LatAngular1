import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]'
})
export class HoverHighlightDirective /*implements OnInit*/ {

  @HostBinding('style.color') textColor: string;
  @Input('appHoverHighlight') highLightColor: {background: string, text: string};

  constructor(private elRef: ElementRef, private render: Renderer2) { }

  /*ngOnInit(): void {
    this.render.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
  }*/

  @HostListener('mouseover') onMouseOver(eventData: Event) {
    this.render.setStyle(this.elRef.nativeElement, 'background-color', this.highLightColor.background);
    this.textColor = this.highLightColor.text;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.render.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.textColor = 'black';
  }
}
