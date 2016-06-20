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
import { MeetingsDetailComponent } from './meetings-detail.component';

describe('Component: MeetingsDetail', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [MeetingsDetailComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([MeetingsDetailComponent],
      (component: MeetingsDetailComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(MeetingsDetailComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(MeetingsDetailComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-meetings-detail></app-meetings-detail>
  `,
  directives: [MeetingsDetailComponent]
})
class MeetingsDetailComponentTestController {
}

