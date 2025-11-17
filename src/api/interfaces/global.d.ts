export interface ApiResponse<T> {
  code: string;
  message: string;
  technical_Message: string | null;
  document: T;

  statusCode: number;
  status: boolean;
  data: T;
}

export interface ApiRequestResponse {
  status: true;
  statusCode: 100;
  message: string;
}

export interface PaginatedResponse<T> {
  code: string;
  status: boolean;
  statusCode: number;
  message: string;
  technical_Message: string | null;
  document: T[];
  data: T[];
  meta: PaginationMeta;
}

export interface PaginationMeta {
  totalCount: number;
  pageSize: number;
  currentPage: number;
  totalPages: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

export type TagColorType = "success" | "error" | "warning" | undefined;
