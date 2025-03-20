import { atom } from 'nanostores';

export const breathingState = atom({
  isInhaling: false,
  isHolding: false,
  isExhaling: false,
  isBottomHolding: false,
  isBreathHoldAfterRound: false,
  currentRound: 0,
  totalRounds: 0,
  currentSuperRound: 0,
  totalSuperRounds: 0,
  isActive: false,
});


export function startExercise(config) {
  breathingState.set({
    isInhaling: false,
    isHolding: false,
    isExhaling: false,
    isBottomHolding: false,
    isBreathHoldAfterRound: false,
    currentRound: 0,
    totalRounds: config.rounds,
    currentSuperRound: 0,
    totalSuperRounds: config.roundsOfRounds || 1,
    isActive: true,
  });
}

export function stopExercise() {
  breathingState.set({
    isInhaling: false,
    isHolding: false,
    isExhaling: false,
    isBottomHolding: false,
    isBreathHoldAfterRound: false,
    currentRound: 0,
    totalRounds: 0,
    currentSuperRound: 0,
    totalSuperRounds: 0,
    isActive: false,
  });
}

export function updateBreathingState(newState) {
  breathingState.set({
    ...breathingState.get(),
    ...newState,
  });
} 