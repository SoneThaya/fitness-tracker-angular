import { TrainingRoutingModule } from './training-routing.module';
import { SharedModule } from './../shared/shared.module';
import { StopTrainingComponent } from './current-training/stop-training.component';
import { PastTrainingsComponent } from './past-trainings/past-trainings.component';
import { NewTrainingComponent } from './new-training/new-training.component';
import { CurrentTrainingComponent } from './current-training/current-training.component';
import { TrainingComponent } from './training.component';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { trainingReducer } from './training.reducer';

@NgModule({
  declarations: [
    TrainingComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingsComponent,
    StopTrainingComponent,
  ],
  imports: [
    SharedModule,
    TrainingRoutingModule,
    StoreModule.forFeature('training', trainingReducer),
  ],
  entryComponents: [StopTrainingComponent],
})
export class TrainingModule {}
