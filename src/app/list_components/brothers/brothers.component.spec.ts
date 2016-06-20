/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { BrothersComponent } from './brothers.component';

describe('Component: Brothers', () => {
  it('should create an instance', () => {
    let component = new BrothersComponent();
    expect(component).toBeTruthy();
  });
});
