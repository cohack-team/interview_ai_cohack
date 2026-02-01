export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  provider: "google" | "github" | "email";
  profilePicture?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface InterviewSession {
  id: string;
  userId: string;
  type: string;
  score: number;
  date: string;
  questions: Question[];
}

export interface Question {
  id: string;
  text: string;
  answer?: string;
  feedback?: string;
  score?: number;
}
