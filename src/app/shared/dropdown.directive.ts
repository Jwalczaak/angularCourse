import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  // @Input() set appDropdown(condition: boolean) {
  //   if (condition) {
  //     this.vcRef.createEmbeddedView(this.templateRef);
  //   } else {
  //     this.vcRef.clear();
  //   }
  // }
  // constructor(
  //   private templateRef: TemplateRef<any>,
  //   private vcRef: ViewContainerRef
  // ) {}

  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
