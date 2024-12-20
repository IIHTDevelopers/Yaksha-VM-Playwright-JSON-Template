import { Page, Locator } from "playwright";

export default class LaboratoryPage {
  private page: Page;
  private laboratoryLink: Locator;
  private laboratoryDashboard: Locator;
  private settingsSubModule: Locator;
  private addNewLabTest: Locator;
  private addButton: Locator;
  private closeButton: Locator;
  private starIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.laboratoryLink = page.locator('');
    this.laboratoryDashboard = page.locator('');
    this.settingsSubModule = page.locator('');
    this.addNewLabTest = page.locator(
      ''
    );
    this.addButton = page.locator('');
    this.closeButton = page.locator('');
    this.starIcon = page.locator('');
  }

  public get getErrorMessageLocator() {
    return (errorMessage: string) => {
      return this.page.locator(
        ``
      );
    };
  }

  /**
   * @Test6 This method verifies the error message when attempting to add a new lab test without entering required values.
   *
   * @description Navigates to Laboratory > Settings, selects "Add New Lab Test," and clicks the Add button without
   *              providing any input. Captures and returns the displayed error message.
   * @Note Do not close "Add Lab Test" Modal
   */
  async verifyErrorMessage() {
    // write your code here
  }

  /**
   * @Test14 This method verifies the tooltip text of the star icon in the laboratory dashboard.
   *
   * @description This function navigates to the laboratory page and dashboard, hovers over the star icon, and
   *              waits for the tooltip to appear. It verifies the visibility of the star icon and retrieves the tooltip
   *              text. 
   */

  async verifyStarTooltip() {
    // write your code here
  }
}
