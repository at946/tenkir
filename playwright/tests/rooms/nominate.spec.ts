import { test, expect } from '@playwright/test';
import urls from '../../helpers/urls';
import usersJoinRoom from '../../helpers/usersJoinRoom';

test('ルームページで、カードをオープンしていないとき、「指名」ボタンが表示されないこと', async ({
  context,
}) => {
  // Given - ルームページでカードを選んでいる
  const [page1, page2, page3] = await usersJoinRoom(context, urls.room(), 3);
  await page1.getByTestId('tefudaCard').nth(0).click();
  await page2.getByTestId('tefudaCard').nth(2).click();

  // When - カードをオープンしない

  // Then - 「指名」ボタンがTableCardsに表示されていない
  await expect(
    page1.getByTestId('tableCardGroup').nth(0).getByTestId('nominateButton'),
  ).not.toBeVisible();
  await expect(
    page1.getByTestId('tableCardGroup').nth(1).getByTestId('nominateButton'),
  ).not.toBeVisible();
  await expect(
    page1.getByTestId('tableCardGroup').nth(2).getByTestId('nominateButton'),
  ).not.toBeVisible();
  await expect(
    page2.getByTestId('tableCardGroup').nth(0).getByTestId('nominateButton'),
  ).not.toBeVisible();
  await expect(
    page2.getByTestId('tableCardGroup').nth(1).getByTestId('nominateButton'),
  ).not.toBeVisible();
  await expect(
    page2.getByTestId('tableCardGroup').nth(2).getByTestId('nominateButton'),
  ).not.toBeVisible();
  await expect(
    page3.getByTestId('tableCardGroup').nth(0).getByTestId('nominateButton'),
  ).not.toBeVisible();
  await expect(
    page3.getByTestId('tableCardGroup').nth(1).getByTestId('nominateButton'),
  ).not.toBeVisible();
  await expect(
    page3.getByTestId('tableCardGroup').nth(2).getByTestId('nominateButton'),
  ).not.toBeVisible();
});

test('ルームページで、カードをオープンしているとき、「指名」ボタンがカードの下に表示されること', async ({
  context,
}) => {
  // Given - ルームページでカードを選んでいる
  const [page1, page2, page3] = await usersJoinRoom(context, urls.room(), 3);
  await page1.getByTestId('tefudaCard').nth(0).click();
  await page2.getByTestId('tefudaCard').nth(2).click();

  // When - カードをオープンする
  await page1.getByTestId('openButton').click();

  // Then - オープンしたカードには「指名」ボタンが表示される
  await expect(
    page1.getByTestId('tableCardGroup').nth(0).getByTestId('nominateButton'),
  ).toBeVisible();
  await expect(
    page1.getByTestId('tableCardGroup').nth(1).getByTestId('nominateButton'),
  ).toBeVisible();
  await expect(
    page1.getByTestId('tableCardGroup').nth(2).getByTestId('nominateButton'),
  ).not.toBeVisible();
  await expect(
    page2.getByTestId('tableCardGroup').nth(0).getByTestId('nominateButton'),
  ).toBeVisible();
  await expect(
    page2.getByTestId('tableCardGroup').nth(1).getByTestId('nominateButton'),
  ).toBeVisible();
  await expect(
    page2.getByTestId('tableCardGroup').nth(2).getByTestId('nominateButton'),
  ).not.toBeVisible();
  await expect(
    page3.getByTestId('tableCardGroup').nth(0).getByTestId('nominateButton'),
  ).toBeVisible();
  await expect(
    page3.getByTestId('tableCardGroup').nth(1).getByTestId('nominateButton'),
  ).toBeVisible();
  await expect(
    page3.getByTestId('tableCardGroup').nth(2).getByTestId('nominateButton'),
  ).not.toBeVisible();
});

test('ルームページで、自分以外の出したカードの「指名」ボタンを選択したとき、そのカードを場に出したメンバーに「指名アラート」が表示されること', async ({
  context,
}) => {
  // Given - ルームページで、カードをオープンする
  const [page1, page2, page3] = await usersJoinRoom(context, urls.room(), 3);
  await page1.getByTestId('tefudaCard').nth(0).click();
  await page2.getByTestId('tefudaCard').nth(1).click();
  await page3.getByTestId('tefudaCard').nth(2).click();
  await page1.getByTestId('openButton').click();

  // Then - page1にだけ指名アラートが表示される
  // page1でdialogが出たらacceptする
  page1.on('dialog', async (dialog) => {
    await expect(dialog.message()).toBe('指名されました！🎉');
    dialog.accept();
  });
  // page2や3でdialogが出たらテスト失敗
  page2.on('dialog', async (dialog) => await expect(true).toBeFalsy());
  page3.on('dialog', async (dialog) => await expect(true).toBeFalsy());

  // When - page1の出したカードの指名ボタンを選択
  await page2
    .getByTestId('tableCardGroup')
    .filter({ hasText: '0' })
    .getByTestId('nominateButton')
    .click();

  // Then - page2にだけ指名完了メッセージが表示される
  await expect(page1.getByText('指名しました！')).not.toBeVisible();
  await expect(page2.getByText('指名しました！')).toBeVisible();
  await expect(page3.getByText('指名しました！')).not.toBeVisible();
  // 一定時間後、メッセージは消える
  await expect(page2.getByText('指名しました！')).not.toBeVisible();
});

test('ルームページで、自分の出したカードの「指名」ボタンを選択したとき、自分に「指名アラート」が表示されること', async ({
  context,
}) => {
  // Given - ルームページで、カードをオープンにする
  const [page1, page2, page3] = await usersJoinRoom(context, urls.room(), 3);
  await page1.getByTestId('tefudaCard').nth(1).click();
  await page2.getByTestId('tefudaCard').nth(2).click();
  await page3.getByTestId('tefudaCard').nth(0).click();
  await page1.getByTestId('openButton').click();

  // Then - page1に指名アラートが表示される
  page1.on('dialog', async (dialog) => {
    await expect(dialog.message()).toBe('指名されました！🎉');
    dialog.accept();
  });
  // page2や3でdialogが出たらテスト失敗
  page2.on('dialog', async (dialog) => await expect(true).toBeFalsy());
  page3.on('dialog', async (dialog) => await expect(true).toBeFalsy());

  // When - page1でpage1のカードを指名する
  await page1
    .getByTestId('tableCardGroup')
    .filter({ hasText: '1' })
    .getByTestId('nominateButton')
    .click();

  // Then - page1で指名完了メッセージが表示される
  await expect(page1.getByText('指名しました！')).toBeVisible();
  await expect(page2.getByText('指名しました！')).not.toBeVisible();
  await expect(page3.getByText('指名しました！')).not.toBeVisible();
  // 一定時間後、メッセージは消える
  await expect(page1.getByText('指名しました！')).not.toBeVisible();
});
