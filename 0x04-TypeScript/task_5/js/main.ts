// Define the MajorCredits interface
interface MajorCredits {
    credits: number;
    brand: "Major";
}

// Define the MinorCredits interface
interface MinorCredits {
    credits: number;
    brand: "Minor";
}

// Implement the sumMajorCredits function
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand: "Major",
    };
}

// Implement the sumMinorCredits function
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand: "Minor",
    };
}
