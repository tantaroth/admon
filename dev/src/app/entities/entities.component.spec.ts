/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { EntitiesComponent } from './entities.component';

describe('Component: Entities', () => {
  it('should create an instance', () => {
    let component = new EntitiesComponent();
    expect(component).toBeTruthy();
  });
});
