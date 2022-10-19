import {Component} from '@angular/core';
import * as html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {

  public sliderName: String;

  constructor() {
    this.sliderName = 'Mi curriculum vitae';
  }

  onExportClick() {
    const options = {
      filename: 'NilsonEscobar_Resume.pdf',
      image: {type: 'png'},
      html2canvas: {},
      jsPDF: {orientation: 'landscape'}
    };

    const content: Element = document.getElementById('resume');

    html2pdf()
      .from(content)
      .set(options)
      .save();
  }


}
