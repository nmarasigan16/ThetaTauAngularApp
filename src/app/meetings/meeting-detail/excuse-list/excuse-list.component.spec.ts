/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ExcuseListComponent } from './excuse-list.component';

describe('Component: ExcuseList', () => {
  it('should create an instance', () => {
    let component = new ExcuseListComponent();
    expect(component).toBeTruthy();
  });
});
