import { CryptoJSInterface } from '../interfaces/CryptoJS';


import CryptoJS from 'crypto-js';

//import CryptoJS = require('CryptoJS');




export class CryptoJSi {



  out;
  wordArray;

  userSesion;
  keyValue;
  key;
  iv;

  data;
  rawData;
  crypttext;


  protected repeatCadena(cadena, longitud): any{

    this.out = cadena.toString();
    while (this.out.length < longitud){
      this.out += cadena;
    } 
    return this.out.substring(0, longitud);
  }


  protected keyBase64(cadena): any{
    this.wordArray = null;
    this.wordArray = CryptoJS.enc.Utf8.parse(this.repeatCadena(cadena, 16));
    return CryptoJS.enc.Base64.stringify(this.wordArray);
  }

  protected hex2a(hex): any{
    var str = '';
    for (var i = 0; i < hex.length; i += 2){
      str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    }
    return str;
  }

  public encryptAES (value): any{
    this.userSesion = '123456';

    this.keyValue = this.keyBase64(this.userSesion.toString());
    this.key = CryptoJS.enc.Base64.parse(this.keyValue);
    this.iv = CryptoJS.enc.Base64.parse(this.keyValue);

    value = value.replace(/Ñ/g, "ñ");
    value = value.replace(/Ñ/g, "<N>");
    value = value.replace(/Á/g, "á");
    value = value.replace(/É/g, "é");
    value = value.replace(/Í/g, "í");
    value = value.replace(/Ó/g, "ó");
    value = value.replace(/Ú/g, "ú");

    var textencryipted = CryptoJS.AES.encrypt(value.toString(), this.key, {
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
        iv: this.iv,
    });
    var encrypt2Value = CryptoJS.AES.encrypt(value.toString() + '<>' + textencryipted.toString(), this.key, {
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
        iv: this.iv,
    });

    return encrypt2Value.toString();

  }


  public decryptAES (value): any{
    this.data = value;
    this.userSesion = '123456';

    this.keyValue = this.keyBase64(this.userSesion);
    this.key = CryptoJS.enc.Base64.parse(this.keyValue);

    this.rawData = atob(this.data);
    this.iv = btoa(this.rawData.substring(0, 16));
    this.crypttext= btoa(this.rawData.substring(16));

    var plaintextArray = CryptoJS.AES.decrypt({ciphertext: CryptoJS.enc.Base64.parse(this.crypttext), salt: ""}, CryptoJS.enc.Hex.parse(this.key.toString()), {iv: CryptoJS.enc.Base64.parse(this.iv)});

    var strDesifrado = this.hex2a(plaintextArray.toString());
    return strDesifrado.replace("<N>", "Ñ");

  }




}


