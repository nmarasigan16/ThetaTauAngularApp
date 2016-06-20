/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { InterviewCheckComponent } from './interview-check.component';

describe('Component: InterviewCheck', () => {
  it('should create an instance', () => {
    let component = new InterviewCheckComponent();
    expect(component).toBeTruthy();
  });
});
