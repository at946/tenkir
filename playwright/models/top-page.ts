import { Locator, Page } from '@playwright/test';
import Footer from './footer';
import urls from '../helpers/urls';
import Header from './header';

export default class TopPage {
  readonly page: Page;
  readonly createRoomButton: Locator;

  readonly header: Header;
  readonly footer: Footer;

  constructor(page: Page) {
    this.page = page;
    this.createRoomButton = page.getByRole('link', { name: '部屋をつくる' });

    this.header = new Header(page);
    this.footer = new Footer(page);
  }

  async goto() {
    await this.page.goto(urls.top);
  }

  async createRoom() {
    await this.createRoomButton.click();
  }

  async clickHeaderLogo() {
    await this.header.clickLogo();
  }

  async clickFooterTOSLink() {
    await this.footer.clickTOSLink();
  }

  async clickFooterPPLink() {
    await this.footer.clickPPLink();
  }
}
