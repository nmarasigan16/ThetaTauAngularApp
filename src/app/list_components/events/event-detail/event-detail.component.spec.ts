/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { EventDetailComponent } from './event-detail.component';

describe('Component: EventDetail', () => {
  it('should create an instance', () => {
    let component = new EventDetailComponent();
    expect(component).toBeTruthy();
  });
});
