/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { MeetingsComponent } from './meetings.component';

describe('Component: Meetings', () => {
  it('should create an instance', () => {
    let component = new MeetingsComponent();
    expect(component).toBeTruthy();
  });
});
