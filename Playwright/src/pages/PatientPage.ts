import { Page, Locator } from "@playwright/test";

export default class PatientPage {
  readonly page: Page;
  public patient: {
    patientLink: Locator;
    searchBar: Locator;
    patientName: Locator;
    hospitalSearchBar: Locator;
    patientCode: Locator;
  };

  constructor(page: Page) {
    this.page = page;
    this.patient = {
      patientLink: page.locator(''),
      searchBar: page.locator(""),
      hospitalSearchBar: page.locator(""),
      patientName: page.locator(""),
      patientCode: page.locator(""),
    };
  }

  /**
   * @Test10.2 This method performs a patient search in the appointment section using reusable function.
   *
   * @description This function highlights the appointment link, clicks on it to navigate to the appointment page,
   *              waits for the page to load, and triggers the patient search action using a helper function.
   *              It ensures that the patient search is executed successfully.
   */

  async searchPatientInPatientPage() {
    // write your code here
  }

  /**
   * @Test8 Searches for and verifies patients in the patient list.
   *
   * @description This method navigates to the patient section, iterates over a predefined list of patients, and performs
   *              a search operation for each patient name. Patients data must be read from testData.json
   *              file. After each search, it verifies that the search result matches the expected patient name.
   *              If all patients are verified successfully.
   */

  async searchAndVerifyPatients() {
    // write your code here
  }
}
