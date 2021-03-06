export interface IProduct {
  __typename?: 'Product' | undefined;
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  created: any;
  updated: any;
  price: number;
  isAvailable?: boolean;
  user?: {
    __typename?: 'User' | undefined;
    id: string;
    name: string;
  };
}

export interface ICartProduct {
  quantity: number;
  unitPrice: number;
  productId: number;
  totalPrice?: number;
  product: IProduct;
}

export interface IOrderProduct {
  quantity: number;
  unitPrice: number;
  productId: number;
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

export interface ILoginInput {
  email: string;
  password: string;
}

export interface IQueryProduct {
  isAvailable: boolean;
  offset: number;
  excludeId?: string | undefined;
  name?: string | undefined;
  lowerPrice?: number | undefined;
  upperPrice?: number | undefined;
}

export interface IProductInput {
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  isAvailable: boolean;
  user: number;
}

export interface IOrder {
  __typename?: 'Order';
  id: string;
  price: number;
  created: any;
  status: string;
  user: { __typename?: 'User'; id: string; name: string; email: string };
  orderProducts: Array<{
    __typename?: 'OrderProduct';
    id: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    productId: {
      __typename?: 'Product';
      id: string;
      price: number;
      name: string;
      description: string;
      imageUrl: string;
      isAvailable: boolean;
    };
  }>;
}

export interface IUser {
  __typename?: 'User';
  id: string;
  name: string;
  email: string;
}

export interface IOrderStatus {
  type: string;
  color: string;
}

export interface IOrderAggregate {
  __typename?: 'Query';
  orderAggregate: Array<{
    __typename?: 'OrderAggregateResponse';
    sum?:
      | { __typename?: 'OrderSumAggregate'; price?: number | null | undefined }
      | null
      | undefined;
    count?:
      | { __typename?: 'OrderCountAggregate'; id?: number | null | undefined }
      | null
      | undefined;
  }>;
}
