const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  "defaultCommandTimeout": 7000,
  retries: {openMode: 2,runMode:2},
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
  
    },
    
  },
 
});
