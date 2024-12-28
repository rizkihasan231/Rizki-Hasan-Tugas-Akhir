// / <reference types="cypress"/>
import forgotPassword from "../POM/ORANGEHRM/Login/ForgotPassword";
describe("Forgot Password", () => {
  // it("Reset Password", () => {
  //   cy.visit(
  //     "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  //   );
  //   forgotPassword.buttonForgotPassword().click();
  //   forgotPassword.textResetPassword().should("have.text", "Reset Password");
  //   forgotPassword.inputUsername().type("Admin");
  //   cy.intercept("GET", "**/index.php/auth/sendPasswordReset").as(
  //     "sendPasswordReset"
  //   );
  //   forgotPassword.buttonResetPassword().click();
  //   cy.wait("@sendPasswordReset").then((intercept) => {
  //     expect(intercept.response.statusCode).to.equal(200);
  //   });
  //   forgotPassword
  //     .textResetPassword()
  //     .should("have.text", "Reset Password link sent successfully");
  // });

  it("Username Blank saat melakukan reset", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    forgotPassword.buttonForgotPassword().click();
    forgotPassword.inputUsername().should("have.value", "");
    forgotPassword.buttonResetPassword().click();
    forgotPassword.messageRequired().should("have.text", "Required");
  });
});
