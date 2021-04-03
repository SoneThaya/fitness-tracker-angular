import { FormsModule } from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './../material.module';
import { StopTrainingComponent } from './current-training/stop-training.component';
import { PastTrainingsComponent } from './past-trainings/past-trainings.component';
import { NewTrainingComponent } from './new-training/new-training.component';
import { CurrentTrainingComponent } from './current-training/current-training.component';
import { TrainingComponent } from './training.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    TrainingComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingsComponent,
    StopTrainingComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    AngularFirestoreModule,
  ],
  entryComponents: [StopTrainingComponent],
})
export class TrainingModule {}
