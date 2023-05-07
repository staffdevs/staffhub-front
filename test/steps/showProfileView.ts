import App from '/src/App.vue';
import { render, screen } from '@testing-library/vue';
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'vitest';

const div = document.createElement('div');

Given('I am on the main screen', () => {
  const { baseElement, html } = render(App, {
    container: document.body.appendChild(div),
  });

  screen.debug();
  expect(baseElement).toBeInTheDocument();
  // Write code here that turns the phrase above into concrete actions
  return html();
});

Given('I am authenticated', () => {
  const { baseElement, html } = render(App, {
    container: document.body.appendChild(div),
  });

  screen.debug();
  expect(baseElement).toBeInTheDocument();
  // Write code here that turns the phrase above into concrete actions
  return html();
});

When('I click on the profile image on the sidebar', () => {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('I see the profile view', () => {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});
