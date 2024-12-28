// / <reference types="cypress"/>
import loginPage from "../POM/ORANGEHRM/Login/login";
import DashboardDirectory from "../POM/ORANGEHRM/Login/DirectoryMenu";

describe("Menu Dashboard Directory", () => {
  it("Filter berdasarkan pekerjaan", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    loginPage.textLogin().should("have.text", "Login");
    loginPage.inputUsername().type("Admin");
    loginPage.inputPassword().type("admin123");
    cy.intercept("GET", "**/employees/action-summary").as("actionsummary");
    loginPage.buttonLogin().click();
    cy.wait("@actionsummary").then((intercept) => {
      expect(intercept.response.statusCode).to.equal(200);
    });
    loginPage.menuDashboard().should("have.text", "Dashboard");
    cy.intercept("GET", "**/index.php/api/v2/directory/*").as("employ-limit");
    DashboardDirectory.menuDirectory().click();
    cy.wait("@employ-limit").then((intercept) => {
      expect(intercept.response.statusCode).to.equal(200);
    });
    DashboardDirectory.dropdownJobTitle().click();
    DashboardDirectory.listBoxJobTitle_Location().should("be.visible");
    cy.contains("Chief Financial Officer").should("be.visible").click();
    DashboardDirectory.buttonSearch().click();
    DashboardDirectory.MessageRecord().should("contain.text", "Record Found");
  });

  it("filter pada nama pekerja", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    loginPage.textLogin().should("have.text", "Login");
    loginPage.inputUsername().type("Admin");
    loginPage.inputPassword().type("admin123");
    cy.intercept("GET", "**/employees/action-summary").as("actionsummary");
    loginPage.buttonLogin().click();
    cy.wait("@actionsummary").then((intercept) => {
      expect(intercept.response.statusCode).to.equal(200);
    });
    loginPage.menuDashboard().should("have.text", "Dashboard");
    cy.intercept("GET", "**/index.php/api/v2/directory/*").as("employ-limit");
    DashboardDirectory.menuDirectory().click();
    cy.wait("@employ-limit").then((intercept) => {
      expect(intercept.response.statusCode).to.equal(200);
    });
    DashboardDirectory.inputEmployeeName().type("Peter");
    DashboardDirectory.dropdownEmployee()
      .should("contain.text", "Peter")
      .click();
    DashboardDirectory.buttonSearch().click();
    DashboardDirectory.MessageRecord().should(
      "contain.text",
      "(1) Record Found"
    );
  });

  it("Filter berdasarkan lokasi", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    loginPage.textLogin().should("have.text", "Login");
    loginPage.inputUsername().type("Admin");
    loginPage.inputPassword().type("admin123");
    cy.intercept("GET", "**/employees/action-summary").as("actionsummary");
    loginPage.buttonLogin().click();
    cy.wait("@actionsummary").then((intercept) => {
      expect(intercept.response.statusCode).to.equal(200);
    });
    loginPage.menuDashboard().should("have.text", "Dashboard");
    cy.intercept("GET", "**/index.php/api/v2/directory/*").as("employ-limit");
    DashboardDirectory.menuDirectory().click();
    cy.wait("@employ-limit").then((intercept) => {
      expect(intercept.response.statusCode).to.equal(200);
    });
    DashboardDirectory.dropdownLocation().click();
    DashboardDirectory.listBoxJobTitle_Location().should("be.visible");
    cy.contains("Texas").should("be.visible").click();
    DashboardDirectory.buttonSearch().click();
    DashboardDirectory.MessageRecord().should(
      "contain.text",
      " (4) Records Found"
    );
  });

  it("Filter pekerjaan berdasarkan tidak ada record", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    loginPage.textLogin().should("have.text", "Login");
    loginPage.inputUsername().type("Admin");
    loginPage.inputPassword().type("admin123");
    cy.intercept("GET", "**/employees/action-summary").as("actionsummary");
    loginPage.buttonLogin().click();
    cy.wait("@actionsummary").then((intercept) => {
      expect(intercept.response.statusCode).to.equal(200);
    });
    loginPage.menuDashboard().should("have.text", "Dashboard");
    cy.intercept("GET", "**/index.php/api/v2/directory/*").as("employ-limit");
    DashboardDirectory.menuDirectory().click();
    cy.wait("@employ-limit").then((intercept) => {
      expect(intercept.response.statusCode).to.equal(200);
    });
    DashboardDirectory.dropdownJobTitle().click();
    DashboardDirectory.listBoxJobTitle_Location().should("be.visible");
    cy.contains("Automaton Tester").should("be.visible").click();
    DashboardDirectory.buttonSearch().click();
    DashboardDirectory.MessageRecord().should(
      "contain.text",
      "No Records Found"
    );
    DashboardDirectory.PopupNoRecordFound().should("be.visible");
  });
});
