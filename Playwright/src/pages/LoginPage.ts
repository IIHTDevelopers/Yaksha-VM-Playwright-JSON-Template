import { Locator, Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  private usernameInput: Locator;
  private passwordInput: Locator;
  private loginButton: Locator;
  private loginErrorMessage: Locator;
  private admin: Locator;
  private logOut: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator(``);
    this.passwordInput = page.locator(``);
    this.loginButton = page.locator(``);
    this.loginErrorMessage = page.locator(``);
    this.admin = page.locator('');
    this.logOut = page.locator("");
  }

  async navigate() {
    // navigate to homepage
  }

  /**
   * @Test1 This method logs in the user with valid credentials.
   *
   * @description This method performs the login operation using the provided valid credentials, which should be fetched from 
   *              testdata.json file. It highlights the input fields for better visibility during interaction and fills the 
   *              username and password fields. After submitting the login form by clicking the login button, it validates 
   *              the success of the login process. The login is considered successful if there are no errors.
   */

  async performLogin() {
    // write your code here
  }

  /**
   * @Test16 This method attempts login with invalid credentials and retrieves the resulting error message.
   *
   * @description Tries logging in with incorrect credentials which should be fetched from testData.json file 
   *              to verify the login error message display. Highlights each input field and the login button 
   *              during interaction. Captures and logs the error message displayed upon failed login attempt.
   */

  async performLoginWithInvalidCredentials() {
    // write your code here
  }
}
