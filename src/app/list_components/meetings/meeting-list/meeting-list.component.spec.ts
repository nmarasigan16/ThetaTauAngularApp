/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { MeetingListComponent } from './meeting-list.component';

describe('Component: MeetingList', () => {
  it('should create an instance', () => {
    let component = new MeetingListComponent();
    expect(component).toBeTruthy();
  });
});
