import { TaskStatus } from '../tasks.model';

export class GetTaskWithFilterDto {
  description?: string;
  status?: TaskStatus;
}
