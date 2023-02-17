export interface IGames {
  title: string;
  variants: string[];
  correct: number;
  step: number;
  setStep(step: number): void;
}