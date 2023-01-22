import { test, expect } from '@playwright/test';
import urls from '../../helpers/urls';
import usersJoinRoom from '../../helpers/usersJoinRoom';

test('ルームページで、カードを選択したとき、カードが場に伏せて置かれること', async ({ page, browser }) => {
  const roomURL = urls.room()
  const [page2] = await usersJoinRoom(page, roomURL, browser, 1)

  await expect(page.locator('data-testid=tableCard')).toHaveCount(2)
  await expect(page.locator('data-testid=tableCard').nth(0)).toHaveClass(/tableCard_blank/)
  await expect(page.locator('data-testid=tableCard').nth(1)).toHaveClass(/tableCard_blank/)

  await page.locator('data-testid=tefudaCard').nth(0).click()

  await expect(page.locator('data-testid=tableCard')).toHaveCount(2)
  await expect(page.locator('data-testid=tableCard').nth(0)).toHaveClass(/tableCard_close/)
  await expect(page.locator('data-testid=tableCard').nth(1)).toHaveClass(/tableCard_blank/)
})

test('ルームページで、カードを選択したとき、選択したカードが選択状態だとわかること', async ({ page, browser }) => {
  const roomURL = urls.room()
  const [page2] = await usersJoinRoom(page, roomURL, browser, 1)

  await expect(page.locator('data-testid=tefudaCard').nth(0)).not.toHaveClass(/tefudaCard_selected/)
  await expect(page.locator('data-testid=tefudaCard').nth(1)).not.toHaveClass(/tefudaCard_selected/)

  await page.locator('data-testid=tefudaCard').nth(0).click()

  await expect(page.locator('data-testid=tefudaCard').nth(0)).toHaveClass(/tefudaCard_selected/)
  await expect(page.locator('data-testid=tefudaCard').nth(1)).not.toHaveClass(/tefudaCard_selected/)

  await page.locator('data-testid=tefudaCard').nth(1).click()

  await expect(page.locator('data-testid=tefudaCard').nth(0)).not.toHaveClass(/tefudaCard_selected/)
  await expect(page.locator('data-testid=tefudaCard').nth(1)).toHaveClass(/tefudaCard_selected/)
});
