/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { InterviewDetailComponent } from './interview-detail.component';

describe('Component: InterviewDetail', () => {
  it('should create an instance', () => {
    let component = new InterviewDetailComponent();
    expect(component).toBeTruthy();
  });
});
