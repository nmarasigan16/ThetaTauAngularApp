/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { EventCheckComponent } from './event-check.component';

describe('Component: EventCheck', () => {
  it('should create an instance', () => {
    let component = new EventCheckComponent();
    expect(component).toBeTruthy();
  });
});
