import { PageInfo } from './page-info';

export interface QueryResult<T> {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: PageInfo;
  items: T[];
}
