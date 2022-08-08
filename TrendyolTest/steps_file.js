// in this file you can append custom step methods to 'I' object

const { Button } = require('selenium-webdriver');
const { urlContains } = require('selenium-webdriver/lib/until');

module.exports = function() {
  
  let paremeters = require ('./Paremeters/TYlogin.json');

  return actor({

    fields :{

      KullaniciAdi : '//input[@id="login-email"]',
      Sifre : '//input[@id="login-password-input"]'
    
    },

    Buttons :{

      GirisYap : '//button[@class="q-primary q-fluid q-button-medium q-button submit"]',
    },

    getEnvirontmentParemeters: function(key) {

      return paremeters[key];

    },

    login : function(){
    this.amOnPage(this.getEnvirontmentParemeters("url"));
    this.wait('2');
    this.click('//button[@id="onetrust-accept-btn-handler"]');
    this.click('//div[@class="link account-user"]');
    this.wait('2');
    this.fillField('//input[@id="login-email"]',this.getEnvirontmentParemeters("KullaniciAdi"));
    this.fillField('//input[@id="login-password-input"]',this.getEnvirontmentParemeters("Sifre"));
    this.click('//button[@class="q-primary q-fluid q-button-medium q-button submit"]',);
    }
  });
}
