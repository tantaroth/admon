/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { RolesComponent } from './roles.component';

describe('Component: Roles', () => {
  it('should create an instance', () => {
    let component = new RolesComponent();
    expect(component).toBeTruthy();
  });
});
