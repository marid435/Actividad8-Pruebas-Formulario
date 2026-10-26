const { test, expect } = require('@playwright/test');

test('la página del formulario carga correctamente', async ({ page }) => {
  const respuesta = await page.goto(
    'https://welcome-form-journey.lovable.app/formulario',
    { waitUntil: 'domcontentloaded' }
  );

  // Verifica que la página respondió correctamente.
  expect(respuesta).not.toBeNull();
  expect(respuesta.status()).toBeLessThan(400);

  // Verifica que el documento tiene un título.
  await expect(page.locator('body')).toBeVisible();
  await expect(page.locator('title')).toHaveCount(1);
});
