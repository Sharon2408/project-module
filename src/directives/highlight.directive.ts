import { Directive, ElementRef, HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})


export class HighlightDirective {
  @Input() appHighlight = '';

  constructor(private elementRef: ElementRef) {}
  
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  @HostListener('click') onClick() {
    this.changeColor('green');
  }

  private highlight(color: string) {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }

  private changeColor(textColor: string) {
    this.elementRef.nativeElement.style.backgroundColor = textColor;
  }
}
