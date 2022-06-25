import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { CustomerdashboardComponent } from './customerdashboard/customerdashboard.component';
import { CustomerprofileComponent } from './customerprofile/customerprofile.component';
import { InquirydataComponent } from './inquirydata/inquirydata.component';
import { SalesorderdataComponent } from './salesorderdata/salesorderdata.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { CreditmemoComponent } from './creditmemo/creditmemo.component';
import { DebitmemoComponent } from './debitmemo/debitmemo.component';



@NgModule({
  declarations: [
    CustomerloginComponent,
    CustomerdashboardComponent,
    CustomerprofileComponent,
    InquirydataComponent,
    SalesorderdataComponent,
    DeliveryComponent,
    CreditmemoComponent,
    DebitmemoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CustomerModule { }
