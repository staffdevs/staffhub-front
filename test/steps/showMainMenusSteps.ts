import App from '/src/App.vue';
import { render, screen } from '@testing-library/vue';
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'vitest';

const div = document.createElement('div');

Given('I am on the main screen', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Given('I am authenticated', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'aaa';
});

When('I click on the {string} button on the sidebar', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('I see the {string} menu of {string}', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'final';
});
