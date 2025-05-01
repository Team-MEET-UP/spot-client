interface TransferInfo {
  type: string;
  duration: string;
  line?: string;
  board?: string;
  stations?: string[];
  distance?: number;
}

interface DriveInfo {
  driveDuration: string;
  driveDistance: number;
  toll: number;
  taxiFareEstimate: number;
}

interface User {
  id: string;
  name: string;
  profileImg?: string;
  startStation: string;
  latitude: number;
  longitude: number;
  transferInfo: TransferInfo[];
  exit: string;
  destination: string;
  totalTime: string;
  drive?: DriveInfo;
}

interface MeetingPoint {
  stationName: string;
  latitude: number;
  longitude: number;
  averageDuration: string;
}

export interface MapState {
  users: User[];
  meetingPoint: MeetingPoint;

  setUsers: (users: User[]) => void;
  setMeetingPoint: (meetingPoint: MeetingPoint) => void;
}
