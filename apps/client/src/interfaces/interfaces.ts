export interface IProduct {
  __typename?: 'Product' | undefined;
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  created: any;
  updated: any;
  price: number;
  user: {
    __typename?: 'User' | undefined;
    id: string;
    name: string;
  };
}

export interface IPageInfo {
  __typename?: 'PageInfo' | undefined;
  endCursor?: any;
  startCursor?: any;
  hasNextPage?: boolean | undefined | null;
  hasPreviousPage?: boolean | undefined | null;
  totalCount?: number;
  currentPage?: number;
}

export interface IOffsetPageInfo {
  __typename?: 'OffsetPageInfo' | undefined;
  hasNextPage?: boolean | undefined | null;
  hasPreviousPage?: boolean | undefined | null;
  totalCount?: number;
  currentPage?: number;
}
