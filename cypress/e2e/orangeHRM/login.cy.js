// / <reference types="cypress"/>
import loginPage from "../POM/ORANGEHRM/Login/login";

// describe("login Feature", () => {
//   it("User dapat login dengan data yang terdaftar", () => {
//     cy.visit(
//       "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
//     );
//     loginPage.textLogin().should("have.text", "Login");
//     loginPage.inputUsername().type("Admin");
//     loginPage.inputPassword().type("admin123");
//     cy.intercept(
//       "GET",
//       "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary"
//     ).as("actionsummary");
//     loginPage.buttonLogin().click();
//     cy.wait("@actionsummary").then((intercept) => {
//       expect(intercept.response.statusCode).to.equal(200);
//     });
//     loginPage.menuDashboard().should("have.text", "Dashboard");
//   });
// });

// it("pengguna gagal login menggunakan password yang salah", () => {
//   cy.visit(
//     "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
//   );
//   loginPage.textLogin().should("have.text", "Login");
//   loginPage.inputUsername().type("Admin");
//   loginPage.inputPassword().type("admin1");
//   cy.intercept("GET", "**/index.php/core/i18n/messages").as("messages");
//   loginPage.buttonLogin().click();
//   cy.wait("@messages").then((intercept) => {
//     expect(intercept.response.statusCode).to.equal(304);
//   });
//   loginPage.messageInvalid().should("have.text", "Invalid credentials");
// });

it("pengguna gagal login menggunakan username yang salah", () => {
  cy.visit(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  loginPage.textLogin().should("have.text", "Login");
  loginPage.inputUsername().type("min");
  loginPage.inputPassword().type("admin123");
  cy.intercept("GET", "**/index.php/core/i18n/messages").as("messages");
  loginPage.buttonLogin().click();
  cy.wait("@messages").then((intercept) => {
    expect(intercept.response.statusCode).to.equal(304);
  });
  loginPage.messageInvalid().should("have.text", "Invalid credentials");
});

// it("pengguna gagal login menggunakan password yang seluruh huruf kapital ", () => {
//   cy.visit(
//     "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
//   );
//   cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should(
//     "have.text",
//     "Login"
//   );
//   cy.get('[name="username"]').type("Admin");
//   cy.get('[name="password"]').type("ADMIN123");
//   cy.intercept(
//     "GET",
//     "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary"
//   ).as("actionsummary");
//   cy.get(
//     '[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]'
//   ).click();
//   cy.wait("@actionsummary").then((intercept) => {
//     expect(intercept.response.statusCode).to.equal(200);
//   });

// it("pengguna gagal login dengan field username yang kosong", () => {
//   cy.visit(
//     "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
//   );
//   cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should(
//     "have.text",
//     "Login"
//   );
//   cy.get('[name="password"]').type("admin123");
//   cy.intercept(
//     "GET",
//     "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary"
//   ).as("actionsummary");
//   cy.get(
//     '[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]'
//   ).click();
//   cy.wait("@actionsummary").then((intercept) => {
//     expect(intercept.response.statusCode).to.equal(200);
//   });

// it("pengguna gagal login dengan field password yang kosong", () => {
//   cy.visit(
//     "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
//   );
//   cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should(
//     "have.text",
//     "Login"
//   );
//   cy.get('[name="username"]').type("Admin");
//   cy.intercept(
//     "GET",
//     "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary"
//   ).as("actionsummary");
//   cy.get(
//     '[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]'
//   ).click();
//   cy.wait("@actionsummary").then((intercept) => {
//     expect(intercept.response.statusCode).to.equal(200);
//   });

// it("pengguna gagal login dengan field username dan password yang kosong", () => {
//   cy.visit(
//     "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
//   );
//   cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should(
//     "have.text",
//     "Login"
//   );
//   cy.intercept(
//     "GET",
//     "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary"
//   ).as("actionsummary");
//   cy.get(
//     '[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]'
//   ).click();
//   cy.wait("@actionsummary").then((intercept) => {
//     expect(intercept.response.statusCode).to.equal(200);
//   });

// it("pengguna berhasil login langsung ke dashboard dengan URL jika sudah login", () => {
//   cy.visit(
//     "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
//   );
//   cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should(
//     "have.text",
//     "Login"
//   );
//   cy.get('[name="username"]').type("Admin");
//   cy.get('[name="password"]').type("admin123");
//   cy.get(
//     '[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]'
//   ).click();
//   cy.get(
//     '[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]'
//   );
//   cy.visit(
//     "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
//   );
