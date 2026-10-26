const { test, expect } = require('@playwright/test');

test('el formulario de contacto carga correctamente', async ({ page }) => {
  await page.goto(
    'https://welcome-form-journey.lovable.app/formulario'
  );

  await expect(page.locator('body')).toBeVisible();
  await expect(page.getByText(/contacto/i).first()).toBeVisible();
});
