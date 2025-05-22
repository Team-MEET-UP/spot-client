export interface VisitedReviewPayload {
  visitedTime: "MORNING" | "LUNCH" | "NIGHT";
  socket: number;
  seat: number;
  quiet: number;
  content?: string;
}
