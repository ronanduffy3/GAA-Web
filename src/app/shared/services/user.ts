export interface User {
   uid: string;
   email: string;
   displayName: string;
   photoURL: string;
   emailVerified: boolean;
   isTeacher?: number;
   isStudent?: number;
}
