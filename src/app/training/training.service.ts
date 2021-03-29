import { Exercise } from './exercise.model';

export class TrainingService {
  private availableExercises: Exercise[] = [
    { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
    { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 18 },
    { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 28 },
    { id: 'burpees', name: 'Burpees', duration: 60, calories: 38 },
  ];

  getAvailableExercises() {
    return this.availableExercises.slice();
  }
}