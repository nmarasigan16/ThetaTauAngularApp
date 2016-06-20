import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { InterviewCheckDetailComponent } from './interview-check-detail.component';

describe('Component: InterviewCheckDetail', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [InterviewCheckDetailComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([InterviewCheckDetailComponent],
      (component: InterviewCheckDetailComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(InterviewCheckDetailComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(InterviewCheckDetailComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-interview-check-detail></app-interview-check-detail>
  `,
  directives: [InterviewCheckDetailComponent]
})
class InterviewCheckDetailComponentTestController {
}

