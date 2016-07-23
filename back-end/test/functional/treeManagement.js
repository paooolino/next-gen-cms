import Browser from 'zombie';

const browser = new Browser();

describe('[treeManagement]', () => {

  // login
  describe('Login as admin, admin123', () => {
    it('should submit the form and see the "NGCMS Admin Panel"', (done) => {
      browser.visit('http://127.0.0.1/next-gen-cms/back-end/build/', () => {
        browser
          .fill('#userInput', 'admin')
          .fill('#passInput', 'admin123')
          .pressButton('#loginButton', () => {
            browser.assert.text('title', 'NGCMS Admin Panel');
            done();
          });
      });
    });
  });
  
  // tree structure
  describe('Add a new "products" item', () => {
    it('should add the item and see it in the tree', () => {
      browser
        .fill('#newItemNameInput', 'products')
        .pressButton('#addItemButton', () => {
          browser.assert.element('.treeItem', 'products');
        });
    });
  });
  
  describe('Adding "man" and "woman" under "products"', () => {
    xit('should add the items and see them in the tree', () => {});
  });
  
  describe('Adding "skirt" and "bikini" under "woman"', () => {
    xit('should add the items and see them in the tree', () => {});
  });
  
  describe('Adding "jeans" and "kilt" under "man"', () => {
    xit('should add the items and see them in the tree', () => {});
  });
  
  // set items visibility
  describe('set "kilt" to be visible only for english', () => {
    xit('should be able to see the item only in the english tree', () => {});
  });
  
  // set items slugs
  describe('set items slugs', () => {
    xit('set products slug in it, en, de', () => {});
    xit('set woman slug in it, en, de', () => {});
    xit('set man slug in it, en, de', () => {});
    xit('set skirt slug in it, en, de', () => {});
    xit('set bikini slug in it, en, de', () => {});
    xit('set jeans slug in it, en, de', () => {});
    xit('set kilt slug in en', () => {});
    xit('should not be allowed to set kilt slug for it, de', () => {});
  });
  
});
