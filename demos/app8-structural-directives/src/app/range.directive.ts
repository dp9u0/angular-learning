import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[myRange]'
})
export class RangeDirective {
  _range: number[];

  @Input("myRangeRangeOf")
  set range(value: number) {
    this.viewContainer.clear();
    this._range = this.generateRange(value[0], value[1]);
    this._range.forEach(num => {
      this.viewContainer.createEmbeddedView(this.templateRef,new RangeContext(num));
    });
  }

  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>) { }

  private generateRange(from: number, to: number): number[] {
    var numbers: number[] = [];
    for (let i = from; i <= to; i++) {
      numbers.push(i);
    }
    return numbers;
  }
}

class RangeContext {
  /**
   *
   */
  constructor(public $implicit: number) {

  }
}
