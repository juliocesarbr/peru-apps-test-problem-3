import { Injectable } from '@angular/core';
// import { CryptoLocalStorageService } from '../services/crypto-local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class GetLocalStoragePropertyService {

  jsonResult: any;
  result: any = '';

  jsonAnswer: any;
  answer: any = '';

  jsonUser: any;
  user: any = '';

  constructor(
    // private clss: CryptoLocalStorageService,
    ) {
  }

  /**
   * Get specific Result property from local storage
   * @param key any
   */
   public getResult(key: any) {
    this.jsonResult = JSON.parse(localStorage.getItem('result'));
    if (this.jsonResult !== null) {
      // console.log(this.jsonAnswer);
      this.result = this.jsonResult;
      return this.result[key];
    }
    return null;
  }

  /**
   * Get specific Answer property from local storage
   * @param key any
   */
  public getAnswer(key: any) {
    this.jsonAnswer = JSON.parse(localStorage.getItem('answer'));
    if (this.jsonAnswer !== null) {
      // console.log(this.jsonAnswer);
      this.answer = this.jsonAnswer;
      return this.answer[key];
    }
    return null;
  }

  /**
   * Get specific Answer property from local storage
   * @param key any
   */
   public getUser(key: any) {
    this.jsonUser = JSON.parse(localStorage.getItem('user'));
    if (this.jsonUser !== null) {
      // console.log(this.jsonAnswer);
      this.user = this.jsonUser;
      return this.user[key];
    }
    return null;
  }

}
