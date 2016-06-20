/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { BrotherListComponent } from './brother-list.component';

describe('Component: BrotherList', () => {
  it('should create an instance', () => {
    let component = new BrotherListComponent();
    expect(component).toBeTruthy();
  });
});
