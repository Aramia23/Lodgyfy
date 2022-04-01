import {
  sectionTitle
} from "../selectors/contact";

class Header {
  getSectionTitle() {
    return cy.get(sectionTitle);
  }
}

export default Header;
