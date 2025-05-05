
export interface NavLink {
  name: string;
  path: string;
}

export interface NavbarLink {
  name: string;
  path: string;
  dropdown?: boolean;
  items?: NavLink[];
}

export interface VideoCallOptions {
  doctorId: string;
  doctorName: string;
  doctorImage?: string;
  callDuration?: number; // in minutes
  isEmergency?: boolean;
  specialtyArea?: string;
}
