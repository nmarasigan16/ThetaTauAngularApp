/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { MeetingDetailComponent } from './meeting-detail.component';

describe('Component: MeetingDetail', () => {
  it('should create an instance', () => {
    let component = new MeetingDetailComponent();
    expect(component).toBeTruthy();
  });
});
