/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { BrotherService } from './brother.service';

describe('Brother Service', () => {
  beforeEachProviders(() => [BrotherService]);

  it('should ...',
      inject([BrotherService], (service: BrotherService) => {
    expect(service).toBeTruthy();
  }));
});
