import { NgModule } from "@angular/core";
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatDialogModule,
  MatTableModule,
  
  MatIconModule,
} from "@angular/material";

@NgModule({
  exports: [
    MatTableModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatIconModule,
    MatDialogModule,
  ]
})
export class AngularMaterialModule {}
