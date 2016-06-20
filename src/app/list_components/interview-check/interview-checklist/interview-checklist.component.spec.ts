/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { InterviewChecklistComponent } from './interview-checklist.component';

describe('Component: InterviewChecklist', () => {
  it('should create an instance', () => {
    let component = new InterviewChecklistComponent();
    expect(component).toBeTruthy();
  });
});
