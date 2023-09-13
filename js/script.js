class Helper {
    checkHitung(val) {
      if (val.length <= 0) return false;
  
      for (let i = 0; i < val.length; i++) {
        if (!(val[i] >= "0" && val[i] <= "9")) return false;
      }
  
      let valueInt = parseInt(val);
      if (valueInt <= 0) return false;
  
      return true;
    }
  }
  
  class Type {
    constructor(elementId, inputId, helper) {
      this.elementId = elementId;
      this.inputId = inputId;
      this.helper = helper;
    }
  
    show() {
      document.getElementById(this.elementId).style.display = "block";
    }
  
    hide() {
      document.getElementById(this.elementId).style.display = "none";
    }
  
    reset() {
      document.getElementById(this.inputId).value = "";
  
      if (document.getElementById(this.elementId).firstElementChild) {
        document
          .getElementById(this.elementId)
          .removeChild(document.getElementById(this.elementId).firstElementChild);
      }
      this.hide();
    }
  
    hitung() {
      throw new Error("Method 'hitung()' harus diimplementasikan!");
    }
  }
  
  class PersegiLuas extends Type {
    constructor(elementId, inputId, helper) {
      super(elementId, inputId, helper);
    }
  
    hitung() {
      let value = document.getElementById(this.inputId).value;
  
      if (!this.helper.checkHitung(value)) {
        this.show();
  
        document.getElementById(this.elementId).style.display = "block";
  
        if (document.getElementById(this.elementId).firstElementChild) {
          document
            .getElementById(this.elementId)
            .removeChild(
              document.getElementById(this.elementId).firstElementChild
            );
        }
  
        const res = document.createElement("p");
        res.classList = "font-robot font-red font-bold line-height-24";
  
        res.innerText = "Silakan masukkan angka terlebih dahulu!";
        document.getElementById(this.elementId).appendChild(res);
      } else {
        this.show();
  
        document.getElementById(this.elementId).style.display = "block";
  
        if (document.getElementById(this.elementId).firstElementChild) {
          document
            .getElementById(this.elementId)
            .removeChild(
              document.getElementById(this.elementId).firstElementChild
            );
        }
  
        let valueInt = parseInt(value);
        let hasil = valueInt * valueInt;
  
        const res = document.createElement("p");
        res.classList = "font-robot line-height-24";
  
        res.innerText = `L = S x S\nL = ${valueInt} x ${valueInt}\nL = ${hasil}`;
        document.getElementById(this.elementId).appendChild(res);
      }
    }
  }
  
  class PersegiKeliling extends Type {
    constructor(elementId, inputId, helper) {
      super(elementId, inputId, helper);
    }
  
    hitung() {
      let value = document.getElementById(this.inputId).value;
  
      if (!this.helper.checkHitung(value)) {
        this.show();
  
        document.getElementById(this.elementId).style.display = "block";
  
        if (document.getElementById(this.elementId).firstElementChild) {
          document
            .getElementById(this.elementId)
            .removeChild(
              document.getElementById(this.elementId).firstElementChild
            );
        }
  
        const res = document.createElement("p");
        res.classList = "font-robot font-red font-bold line-height-24";
  
        res.innerText = "Silakan masukkan angka terlebih dahulu!";
        document.getElementById(this.elementId).appendChild(res);
      } else {
        this.show();
  
        document.getElementById(this.elementId).style.display = "block";
  
        if (document.getElementById(this.elementId).firstElementChild) {
          document
            .getElementById(this.elementId)
            .removeChild(
              document.getElementById(this.elementId).firstElementChild
            );
        }
  
        let valueInt = parseInt(value);
        let hasil = 4 * valueInt;
  
        const res = document.createElement("p");
        res.classList = "font-robot line-height-24";
  
        res.innerText = `K = 4 x S\nK = 4 x ${valueInt}\nK = ${hasil}`;
        document.getElementById(this.elementId).appendChild(res);
      }
    }
  }
 

  function getHitung(type) {
    switch (type) {
      case "persegiLuas": {
        persegiLuas.hitung();
        break;
      }
      case "persegiKeliling": {
        persegiKeliling.hitung();
        break;
      }      
    }
  }
  
  function resetHasil(type) {
    switch (type) {
      case "persegiLuas": {
        persegiLuas.reset();
        break;
      }
      case "persegiKeliling": {
        persegiKeliling.reset();
        break;
      }      
    }
  }
   
  const helper = new Helper();
  
  const persegiLuas = new PersegiLuas(
    "hasilPersegiLuas",
    "hitungPersegiLuas",
    helper
  );
  persegiLuas.hide();
  
  const persegiKeliling = new PersegiKeliling(
    "hasilPersegiKeliling",
    "hitungPersegiKeliling",
    helper
  );
  persegiKeliling.hide();
   
  //
 