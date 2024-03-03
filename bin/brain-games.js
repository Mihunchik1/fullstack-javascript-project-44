#!/usr/bin/env node
import getName from '../src/cli.js';

export default function greeting() {
  console.log('Welcome to the Brain Games!');
  getName();
}
