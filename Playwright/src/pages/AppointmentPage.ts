import { Page, Locator } from "@playwright/test";

export default class AppointmentPage {
  readonly page: Page;
  public appointment: {
    appointmentLink: Locator;
    counterItem: Locator;
    titleName: Locator;
    searchBar: Locator;
    patientName: Locator;
    hospitalSearchBar: Locator;
    patientCode: Locator;
    newVisitTab: Locator;
    newVisitHeading: Locator;
  };

  constructor(page: Page) {
    this.page = page;
    this.appointment = {
      appointmentLink: page.locator(''),
      counterItem: page.locator(""),
      titleName: page.locator(""),
      searchBar: page.locator(""),
      hospitalSearchBar: page.locator(""),
      patientName: page.locator(""),
      patientCode: page.locator(""),
      newVisitTab: page.locator(``),
      newVisitHeading: page.locator(``),
    };
  }

  /**
   * @Test3 Validates the presence of the specified patient name in the 'ShortName' column of the search results grid.
   *
   * @description This method checks whether the passed patient name appears in the search results under the 'ShortName' column. Patient name must be fetched from testData.json file. It waits for the column to be visible, retrieves the list of displayed names, and verifies that the expected patient name is included. 
   * If the name is found, the method confirms success; otherwise, it logs an error for troubleshooting purposes.
   */
  async verifypatientName() {
    // write your code here
  }

  /**
   * @Test12 This method opens the New Visit page in the appointment module using the Alt + N keyboard shortcut.
   *
   * @description This function clicks the appointment link to navigate to the appointment module.
   * It then clicks on the "New Visit" tab and simulates pressing the Alt + N keyboard shortcut  to open
   * the New Visit page. After triggering the shortcut, it waits for the page to load and verifies that
   * the New Visit page is displayed by checking the visibility of the New Visit heading and the URL.
   */
  async openNewVisitPageThroughKeyboardButton() {
    // write your code here
  }

  /**
   * @Test10.1 This method performs a patient search in the appointment section using reusable function.
   *
   * @description This function highlights the appointment link, clicks on it to navigate to the appointment page, waits for the page to load, and triggers the patient search action using a helper function.
   * It ensures that the patient search is executed successfully.
   */

  async searchPatientInAppointment() {
    // write your code here
  }
}
