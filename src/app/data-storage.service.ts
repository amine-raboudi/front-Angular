import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor() { }
  private storageKey = 'userData';

  setAd(data: any) {
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  getAd(): any {
    const storedData = localStorage.getItem(this.storageKey);
    return storedData ? JSON.parse(storedData) : null;

  }
  clearAd() {
    localStorage.removeItem(this.storageKey);
  }
  setAg(data: any) {
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  getAg(): any {
    const storedData = localStorage.getItem(this.storageKey);
    return storedData ? JSON.parse(storedData) : null;

  }
  clearAg() {
    localStorage.removeItem(this.storageKey);
  }
  setCli(data: any) {
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  getCli(): any {
    const storedData = localStorage.getItem(this.storageKey);
    return storedData ? JSON.parse(storedData) : null;

  }
  clearCli() {
    localStorage.removeItem(this.storageKey);
  }
}
