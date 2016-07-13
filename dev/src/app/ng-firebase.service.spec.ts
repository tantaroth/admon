/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { NgFirebaseService } from './ng-firebase.service';

describe('NgFirebase Service', () => {
  beforeEachProviders(() => [NgFirebaseService]);

  it('should ...',
      inject([NgFirebaseService], (service: NgFirebaseService) => {
    expect(service).toBeTruthy();
  }));
});
