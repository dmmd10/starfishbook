import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';




import { NotePageRoutingModule } from './note-routing.module';

import { NotePage } from './note.page';
import { NgxColorsModule } from 'ngx-colors';
import { IonicModule } from '@ionic/angular';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatIconModule,
    MatInputModule,
    NotePageRoutingModule,
    ReactiveFormsModule,
    NgxColorsModule,
    MatIconModule
  ],
  declarations: [NotePage]
})
export class NotePageModule {}
