// Task 11: Brand convention & Nominal typing

// Interfaces with brand properties
export interface MajorCredits {
  credits: number;
  brand: 'Major';
}

export interface MinorCredits {
  credits: number;
  brand: 'Minor';
}

// Function to sum MajorCredits
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'Major'
  };
}

// Function to sum MinorCredits
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'Minor'
  };
}

// Example usage
const major1: MajorCredits = { credits: 10, brand: 'Major' };
const major2: MajorCredits = { credits: 15, brand: 'Major' };
console.log(sumMajorCredits(major1, major2)); // { credits: 25, brand: 'Major' }

const minor1: MinorCredits = { credits: 5, brand: 'Minor' };
const minor2: MinorCredits = { credits: 7, brand: 'Minor' };
console.log(sumMinorCredits(minor1, minor2)); // { credits: 12, brand: 'Minor' }

