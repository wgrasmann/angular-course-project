import { Directive, ElementRef, Renderer2, Input, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {

  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen(eventData: Event) {
    this.isOpen = !this.isOpen;
  }
}
