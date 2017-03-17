import { CryptoJSInterface } from '../interfaces/CryptoJS';

const CryptoJS = require('CryptoJS');

import CryptoJS from 'CryptoJS';
//import { CryptoJS } from 'lib/google-crypto-aes.min';


//import CryptoJS = require('crypto-js');

// import { CryptoJS } from 'CryptoJS';






export class CryptoJSi {
  out;
  wordArray;

  userSesion;
  keyValue;
  key;
  iv;

  protected repeatCadena(cadena, longitud): any{
    this.out = cadena.toString();
    while (this.out.length < longitud){
      this.out += cadena;
    } 
    return this.out.substring(0, longitud);
  }


  // protected keyBase64(cadena): any{
  //   this.wordArray = null;
  //   this.wordArray = CryptoJS.enc.Utf8.parse(this.repeatCadena(cadena, 16));
  // }

  // public encryptAES (value): any{
  //   this.userSesion = '123456';
  //   this.keyValue = this.keyBase64(this.userSesion.toString());
  //   this.key = CryptoJS.enc.Base64.parse(this.keyValue);
  //   this.iv = CryptoJS.enc.Base64.parse(this.keyValue);

  //   value = value.replace(/Ñ/g, "ñ");
  //   value = value.replace(/Ñ/g, "<N>");
  //   value = value.replace(/Á/g, "á");
  //   value = value.replace(/É/g, "é");
  //   value = value.replace(/Í/g, "í");
  //   value = value.replace(/Ó/g, "ó");
  //   value = value.replace(/Ú/g, "ú");

  //   var textencryipted = CryptoJS.AES.encrypt(value.toString(), this.key, {
  //       mode: CryptoJS.mode.CBC,
  //       padding: CryptoJS.pad.Pkcs7,
  //       iv: this.iv,
  //   });
  //   var encrypt2Value = CryptoJS.AES.encrypt(value.toString() + '<>' + textencryipted.toString(), this.key, {
  //       mode: CryptoJS.mode.CBC,
  //       padding: CryptoJS.pad.Pkcs7,
  //       iv: this.iv,
  //   });

  //   return encrypt2Value.toString();

  // }




}


