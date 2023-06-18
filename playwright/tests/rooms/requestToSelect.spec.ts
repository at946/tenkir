import { test, expect } from '@playwright/test';
import createRoomId from '../../helpers/createRoomId';
import RoomPage from '../../models/room-page';

test('ルームページで、「早く選んで」ボタンを選択したとき、呼びかけましたトーストが表示されること', async ({
  context,
}) => {
  // Given
  const roomId: string = createRoomId();
  const roomPage1: RoomPage = new RoomPage(await context.newPage());
  const roomPage2: RoomPage = new RoomPage(await context.newPage());
  await roomPage1.goto(roomId);
  await roomPage2.goto(roomId);
  await roomPage1.selectCard('0');

  // When
  await roomPage1.requestToSelect();

  // Then
  await expect(roomPage1.haveRequestedToSelectToast).toBeVisible();
  await expect(roomPage2.haveRequestedToSelectToast).not.toBeVisible();

  // Then - Toastは少ししたら消える
  await expect(roomPage1.haveRequestedToSelectToast).not.toBeVisible();
});

test('ルームページで、「早く選んで」ボタンを選択したとき、まだカードを選んでいないプレイヤーに催促のトーストが表示されて音が鳴ること', async ({
  context,
}) => {
  // Given
  // When
  // Then
});

test('ルームページで、カードをオープンにしたとき、「早く選んで」ボタンは表示されないこと', async ({
  context,
}) => {
  // Given
  // When
  // Then
});

test('ルームページで、全プレイヤーがカードを出しているとき、「早く選んで」ボタンは選択できないこと', async ({
  context,
}) => {
  // Given
  // When
  // Then
});
