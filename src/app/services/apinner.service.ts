import {Injectable} from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class ApinnerService {

  constructor(private _spinnerServive: NgxSpinnerService) {
  }

  public callSpinner() {
    this._spinnerServive.show();
  }

  public sptopSpinner() {
    this._spinnerServive.hide();
  }
}
