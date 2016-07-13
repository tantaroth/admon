/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { BlocksComponent } from './blocks.component';

describe('Component: Blocks', () => {
  it('should create an instance', () => {
    let component = new BlocksComponent();
    expect(component).toBeTruthy();
  });
});
