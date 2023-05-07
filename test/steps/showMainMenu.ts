import App from '/src/App.vue';
import { render, screen } from '@testing-library/vue';
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'vitest';

const div = document.createElement('div');

Given('I am on the log in screen', () => {
  const { baseElement, html } = render(App, {
    container: document.body.appendChild(div),
  });

  screen.debug();
  expect(baseElement).toBeInTheDocument();
  // Write code here that turns the phrase above into concrete actions
  return html();
});

Given('I am not authenticated', () => {
  const { baseElement, html } = render(App, {
    container: document.body.appendChild(div),
  });

  screen.debug();
  expect(baseElement).toBeInTheDocument();
  // Write code here that turns the phrase above into concrete actions
  return html();
});

When('I enter my user and password', () => {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('click on log in button', () => {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('I see the main view', () => {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});
