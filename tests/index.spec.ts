import { test, expect } from '@playwright/test';

test('homepage has title and links', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await expect(page).toHaveTitle(/LinkTreeFreeClone/);

  const twitter = page.getByRole('link', { name: '🐦 Twitter' });
  await expect(twitter).toHaveAttribute('href', 'https://*****');

  const youtube = page.getByRole('link', { name: '📺 Youtube' });
  await expect(youtube).toHaveAttribute('href', 'https://www.youtube.com/c/****');

  const github = page.getByRole('link', { name: '🐙 Github' });
  await expect(github).toHaveAttribute('href', 'https://github.com/****');

  const blog = page.getByRole('link', { name: '📝 Blog' });
  await expect(blog).toHaveAttribute('href', 'https://*****');

  const phone = page.getByRole('link', { name: '☎️ Call me' });
  await expect(phone).toHaveAttribute('href', 'tel://+40728183110');

  const email = page.getByRole('link', { name: '📪 Email me' });
  await expect(email).toHaveAttribute('href', 'mailto://contact@yoandev.co');
});
