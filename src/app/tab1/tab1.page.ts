import { Component, OnInit } from "@angular/core";
import {
  InAppBrowser,
  InAppBrowserOptions,
} from "@ionic-native/in-app-browser/ngx";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page implements OnInit {
  url: string;

  constructor(private iab: InAppBrowser) {}

  ngOnInit(): void {}

  openDoctorAkiWebPage(): void {
    const option: InAppBrowserOptions = {
      //zoom: "no",
      //hardwareback: 'no'
    };

    const browser = this.iab.create(
      "https://www.doctoraki.com/",
      "_self",
      option
    );
  }
}
