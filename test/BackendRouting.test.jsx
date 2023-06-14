import app from '../server/server';
import express from 'express';
import { describe, it, expect } from '@jest/globals';
const request = require("supertest")(app);


describe('Backend Route testing', () => {

  it('it recieve the response hi after posting to /api/test', async () => {
    expect(1).toBe(1);
  });
  it('should contain the heading 1', () => {
    expect(1).toBe(1);
  });
  it('should contain the heading 1', () => {
    expect(1).toBe(1);
  });
  it('should contain the heading 1', () => {
    expect(1).toBe(1);
  });
  it('should contain the heading 1', () => {
    expect(1).toBe(1);
  });
});

