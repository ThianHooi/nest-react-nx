import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Cursor for paging through collections */
  ConnectionCursor: any;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type AddOrderProductsToOrderInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddProductsToUserInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type BooleanFieldComparison = {
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
};

export type CreateManyOrdersInput = {
  /** Array of records to create */
  orders: Array<CreateOrder>;
};

export type CreateOneOrderProductInput = {
  /** The record to create */
  orderProduct: CreateOrderProduct;
};

export type CreateOneProductInput = {
  /** The record to create */
  product: CreateProduct;
};

export type CreateOrder = {
  created?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  price?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<Scalars['String']>;
  updated?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<Scalars['Float']>;
};

export type CreateOrderProduct = {
  created?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  orderId?: InputMaybe<Scalars['Float']>;
  productId?: InputMaybe<Scalars['Float']>;
  quantity?: InputMaybe<Scalars['Float']>;
  totalPrice?: InputMaybe<Scalars['Float']>;
  unitPrice?: InputMaybe<Scalars['Float']>;
  updated?: InputMaybe<Scalars['DateTime']>;
};

export type CreateProduct = {
  created?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  isAvailable?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  type?: InputMaybe<Scalars['String']>;
  updated?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<Scalars['Float']>;
};

export type CreateUserInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  role: Scalars['String'];
};

export type CursorPaging = {
  /** Paginate after opaque cursor */
  after?: InputMaybe<Scalars['ConnectionCursor']>;
  /** Paginate before opaque cursor */
  before?: InputMaybe<Scalars['ConnectionCursor']>;
  /** Paginate first */
  first?: InputMaybe<Scalars['Int']>;
  /** Paginate last */
  last?: InputMaybe<Scalars['Int']>;
};

export type DeleteOneUserInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type IdFilterComparison = {
  eq?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  iLike?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<Scalars['ID']>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['ID']>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  neq?: InputMaybe<Scalars['ID']>;
  notILike?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<Scalars['ID']>>;
  notLike?: InputMaybe<Scalars['ID']>;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  access_token: Scalars['String'];
  user: User;
};

export type LoginUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addOrderProductsToOrder: Order;
  addProductsToUser: User;
  createManyOrders: Array<Order>;
  createOneOrderProduct: OrderProduct;
  createOneProduct: Product;
  createOrder: Order;
  createUser: User;
  deleteOneUser: UserDeleteResponse;
  login: LoginResponse;
  setOrderIdOnOrderProduct: OrderProduct;
  setOrderProductsOnOrder: Order;
  setProductIdOnOrderProduct: OrderProduct;
  setProductsOnUser: User;
  setUserOnOrder: Order;
  setUserOnProduct: Product;
  updateOneOrderProduct: OrderProduct;
  updateOneProduct: Product;
  updateOneUser: User;
};


export type MutationAddOrderProductsToOrderArgs = {
  input: AddOrderProductsToOrderInput;
};


export type MutationAddProductsToUserArgs = {
  input: AddProductsToUserInput;
};


export type MutationCreateManyOrdersArgs = {
  input: CreateManyOrdersInput;
};


export type MutationCreateOneOrderProductArgs = {
  input: CreateOneOrderProductInput;
};


export type MutationCreateOneProductArgs = {
  input: CreateOneProductInput;
};


export type MutationCreateOrderArgs = {
  input: OrderInputDto;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationDeleteOneUserArgs = {
  input: DeleteOneUserInput;
};


export type MutationLoginArgs = {
  input: LoginUserInput;
};


export type MutationSetOrderIdOnOrderProductArgs = {
  input: SetOrderIdOnOrderProductInput;
};


export type MutationSetOrderProductsOnOrderArgs = {
  input: SetOrderProductsOnOrderInput;
};


export type MutationSetProductIdOnOrderProductArgs = {
  input: SetProductIdOnOrderProductInput;
};


export type MutationSetProductsOnUserArgs = {
  input: SetProductsOnUserInput;
};


export type MutationSetUserOnOrderArgs = {
  input: SetUserOnOrderInput;
};


export type MutationSetUserOnProductArgs = {
  input: SetUserOnProductInput;
};


export type MutationUpdateOneOrderProductArgs = {
  input: UpdateOneOrderProductInput;
};


export type MutationUpdateOneProductArgs = {
  input: UpdateOneProductInput;
};


export type MutationUpdateOneUserArgs = {
  input: UpdateOneUserInput;
};

export type NumberFieldComparison = {
  between?: InputMaybe<NumberFieldComparisonBetween>;
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  neq?: InputMaybe<Scalars['Float']>;
  notBetween?: InputMaybe<NumberFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NumberFieldComparisonBetween = {
  lower: Scalars['Float'];
  upper: Scalars['Float'];
};

export type OffsetPageInfo = {
  __typename?: 'OffsetPageInfo';
  /** true if paging forward and there are more records. */
  hasNextPage?: Maybe<Scalars['Boolean']>;
  /** true if paging backwards and there are more records. */
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
};

export type OffsetPaging = {
  /** Limit the number of records returned */
  limit?: InputMaybe<Scalars['Int']>;
  /** Offset to start returning records from */
  offset?: InputMaybe<Scalars['Int']>;
};

export type Order = {
  __typename?: 'Order';
  created: Scalars['DateTime'];
  id: Scalars['ID'];
  orderProducts: Array<OrderProduct>;
  orderProductsAggregate: Array<OrderOrderProductsAggregateResponse>;
  price: Scalars['Float'];
  status: Scalars['String'];
  updated: Scalars['DateTime'];
  user: User;
};


export type OrderOrderProductsArgs = {
  filter?: InputMaybe<OrderProductFilter>;
  sorting?: InputMaybe<Array<OrderProductSort>>;
};


export type OrderOrderProductsAggregateArgs = {
  filter?: InputMaybe<OrderProductAggregateFilter>;
};

export type OrderAggregateFilter = {
  and?: InputMaybe<Array<OrderAggregateFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderAggregateFilter>>;
  price?: InputMaybe<NumberFieldComparison>;
  status?: InputMaybe<StringFieldComparison>;
  user?: InputMaybe<NumberFieldComparison>;
};

export type OrderAggregateGroupBy = {
  __typename?: 'OrderAggregateGroupBy';
  id?: Maybe<Scalars['ID']>;
  price?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['Float']>;
};

export type OrderAggregateResponse = {
  __typename?: 'OrderAggregateResponse';
  avg?: Maybe<OrderAvgAggregate>;
  count?: Maybe<OrderCountAggregate>;
  groupBy?: Maybe<OrderAggregateGroupBy>;
  max?: Maybe<OrderMaxAggregate>;
  min?: Maybe<OrderMinAggregate>;
  sum?: Maybe<OrderSumAggregate>;
};

export type OrderAvgAggregate = {
  __typename?: 'OrderAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  user?: Maybe<Scalars['Float']>;
};

export type OrderConnection = {
  __typename?: 'OrderConnection';
  /** Array of nodes. */
  nodes: Array<Order>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type OrderCountAggregate = {
  __typename?: 'OrderCountAggregate';
  id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['Int']>;
};

export type OrderFilter = {
  and?: InputMaybe<Array<OrderFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilter>>;
  orderProducts?: InputMaybe<OrderFilterOrderProductFilter>;
  price?: InputMaybe<NumberFieldComparison>;
  status?: InputMaybe<StringFieldComparison>;
  user?: InputMaybe<NumberFieldComparison>;
};

export type OrderFilterOrderProductFilter = {
  and?: InputMaybe<Array<OrderFilterOrderProductFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderProductFilter>>;
  orderId?: InputMaybe<NumberFieldComparison>;
  productId?: InputMaybe<NumberFieldComparison>;
  quantity?: InputMaybe<NumberFieldComparison>;
  totalPrice?: InputMaybe<NumberFieldComparison>;
  unitPrice?: InputMaybe<NumberFieldComparison>;
};

export type OrderInputDto = {
  orderItems?: InputMaybe<Array<OrderProductInput>>;
  user: Scalars['Float'];
};

export type OrderMaxAggregate = {
  __typename?: 'OrderMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  price?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['Float']>;
};

export type OrderMinAggregate = {
  __typename?: 'OrderMinAggregate';
  id?: Maybe<Scalars['ID']>;
  price?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['Float']>;
};

export type OrderOrderProductsAggregateGroupBy = {
  __typename?: 'OrderOrderProductsAggregateGroupBy';
  id?: Maybe<Scalars['ID']>;
  orderId?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  totalPrice?: Maybe<Scalars['Float']>;
  unitPrice?: Maybe<Scalars['Float']>;
};

export type OrderOrderProductsAggregateResponse = {
  __typename?: 'OrderOrderProductsAggregateResponse';
  avg?: Maybe<OrderOrderProductsAvgAggregate>;
  count?: Maybe<OrderOrderProductsCountAggregate>;
  groupBy?: Maybe<OrderOrderProductsAggregateGroupBy>;
  max?: Maybe<OrderOrderProductsMaxAggregate>;
  min?: Maybe<OrderOrderProductsMinAggregate>;
  sum?: Maybe<OrderOrderProductsSumAggregate>;
};

export type OrderOrderProductsAvgAggregate = {
  __typename?: 'OrderOrderProductsAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  orderId?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  totalPrice?: Maybe<Scalars['Float']>;
  unitPrice?: Maybe<Scalars['Float']>;
};

export type OrderOrderProductsCountAggregate = {
  __typename?: 'OrderOrderProductsCountAggregate';
  id?: Maybe<Scalars['Int']>;
  orderId?: Maybe<Scalars['Int']>;
  productId?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  totalPrice?: Maybe<Scalars['Int']>;
  unitPrice?: Maybe<Scalars['Int']>;
};

export type OrderOrderProductsMaxAggregate = {
  __typename?: 'OrderOrderProductsMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  orderId?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  totalPrice?: Maybe<Scalars['Float']>;
  unitPrice?: Maybe<Scalars['Float']>;
};

export type OrderOrderProductsMinAggregate = {
  __typename?: 'OrderOrderProductsMinAggregate';
  id?: Maybe<Scalars['ID']>;
  orderId?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  totalPrice?: Maybe<Scalars['Float']>;
  unitPrice?: Maybe<Scalars['Float']>;
};

export type OrderOrderProductsSumAggregate = {
  __typename?: 'OrderOrderProductsSumAggregate';
  id?: Maybe<Scalars['Float']>;
  orderId?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  totalPrice?: Maybe<Scalars['Float']>;
  unitPrice?: Maybe<Scalars['Float']>;
};

export type OrderProduct = {
  __typename?: 'OrderProduct';
  created: Scalars['DateTime'];
  id: Scalars['ID'];
  orderId: Order;
  productId: Product;
  quantity: Scalars['Float'];
  totalPrice: Scalars['Float'];
  unitPrice: Scalars['Float'];
  updated: Scalars['DateTime'];
};

export type OrderProductAggregateFilter = {
  and?: InputMaybe<Array<OrderProductAggregateFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderProductAggregateFilter>>;
  orderId?: InputMaybe<NumberFieldComparison>;
  productId?: InputMaybe<NumberFieldComparison>;
  quantity?: InputMaybe<NumberFieldComparison>;
  totalPrice?: InputMaybe<NumberFieldComparison>;
  unitPrice?: InputMaybe<NumberFieldComparison>;
};

export type OrderProductAggregateGroupBy = {
  __typename?: 'OrderProductAggregateGroupBy';
  id?: Maybe<Scalars['ID']>;
  orderId?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  totalPrice?: Maybe<Scalars['Float']>;
  unitPrice?: Maybe<Scalars['Float']>;
};

export type OrderProductAggregateResponse = {
  __typename?: 'OrderProductAggregateResponse';
  avg?: Maybe<OrderProductAvgAggregate>;
  count?: Maybe<OrderProductCountAggregate>;
  groupBy?: Maybe<OrderProductAggregateGroupBy>;
  max?: Maybe<OrderProductMaxAggregate>;
  min?: Maybe<OrderProductMinAggregate>;
  sum?: Maybe<OrderProductSumAggregate>;
};

export type OrderProductAvgAggregate = {
  __typename?: 'OrderProductAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  orderId?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  totalPrice?: Maybe<Scalars['Float']>;
  unitPrice?: Maybe<Scalars['Float']>;
};

export type OrderProductConnection = {
  __typename?: 'OrderProductConnection';
  /** Array of nodes. */
  nodes: Array<OrderProduct>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type OrderProductCountAggregate = {
  __typename?: 'OrderProductCountAggregate';
  id?: Maybe<Scalars['Int']>;
  orderId?: Maybe<Scalars['Int']>;
  productId?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  totalPrice?: Maybe<Scalars['Int']>;
  unitPrice?: Maybe<Scalars['Int']>;
};

export type OrderProductFilter = {
  and?: InputMaybe<Array<OrderProductFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderProductFilter>>;
  orderId?: InputMaybe<NumberFieldComparison>;
  productId?: InputMaybe<NumberFieldComparison>;
  quantity?: InputMaybe<NumberFieldComparison>;
  totalPrice?: InputMaybe<NumberFieldComparison>;
  unitPrice?: InputMaybe<NumberFieldComparison>;
};

export type OrderProductInput = {
  productId: Scalars['Float'];
  quantity: Scalars['Float'];
  totalPrice?: InputMaybe<Scalars['Float']>;
  unitPrice: Scalars['Float'];
};

export type OrderProductMaxAggregate = {
  __typename?: 'OrderProductMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  orderId?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  totalPrice?: Maybe<Scalars['Float']>;
  unitPrice?: Maybe<Scalars['Float']>;
};

export type OrderProductMinAggregate = {
  __typename?: 'OrderProductMinAggregate';
  id?: Maybe<Scalars['ID']>;
  orderId?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  totalPrice?: Maybe<Scalars['Float']>;
  unitPrice?: Maybe<Scalars['Float']>;
};

export type OrderProductSort = {
  direction: SortDirection;
  field: OrderProductSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum OrderProductSortFields {
  Id = 'id',
  OrderId = 'orderId',
  ProductId = 'productId',
  Quantity = 'quantity',
  TotalPrice = 'totalPrice',
  UnitPrice = 'unitPrice'
}

export type OrderProductSumAggregate = {
  __typename?: 'OrderProductSumAggregate';
  id?: Maybe<Scalars['Float']>;
  orderId?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  totalPrice?: Maybe<Scalars['Float']>;
  unitPrice?: Maybe<Scalars['Float']>;
};

export type OrderSort = {
  direction: SortDirection;
  field: OrderSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum OrderSortFields {
  Id = 'id',
  Price = 'price',
  Status = 'status',
  User = 'user'
}

export type OrderSumAggregate = {
  __typename?: 'OrderSumAggregate';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  user?: Maybe<Scalars['Float']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  /** The cursor of the last returned record. */
  endCursor?: Maybe<Scalars['ConnectionCursor']>;
  /** true if paging forward and there are more records. */
  hasNextPage?: Maybe<Scalars['Boolean']>;
  /** true if paging backwards and there are more records. */
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
  /** The cursor of the first returned record. */
  startCursor?: Maybe<Scalars['ConnectionCursor']>;
};

export type Product = {
  __typename?: 'Product';
  created: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  imageUrl: Scalars['String'];
  isAvailable: Scalars['Boolean'];
  name: Scalars['String'];
  price: Scalars['Float'];
  type: Scalars['String'];
  updated: Scalars['DateTime'];
  user: User;
};

export type ProductAggregateGroupBy = {
  __typename?: 'ProductAggregateGroupBy';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  imageUrl?: Maybe<Scalars['String']>;
  isAvailable?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['Float']>;
};

export type ProductAvgAggregate = {
  __typename?: 'ProductAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  user?: Maybe<Scalars['Float']>;
};

export type ProductConnection = {
  __typename?: 'ProductConnection';
  /** Array of nodes. */
  nodes: Array<Product>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type ProductCountAggregate = {
  __typename?: 'ProductCountAggregate';
  description?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  imageUrl?: Maybe<Scalars['Int']>;
  isAvailable?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['Int']>;
};

export type ProductFilter = {
  and?: InputMaybe<Array<ProductFilter>>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  imageUrl?: InputMaybe<StringFieldComparison>;
  isAvailable?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductFilter>>;
  price?: InputMaybe<NumberFieldComparison>;
  type?: InputMaybe<StringFieldComparison>;
  user?: InputMaybe<NumberFieldComparison>;
};

export type ProductMaxAggregate = {
  __typename?: 'ProductMaxAggregate';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  imageUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['Float']>;
};

export type ProductMinAggregate = {
  __typename?: 'ProductMinAggregate';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  imageUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['Float']>;
};

export type ProductSort = {
  direction: SortDirection;
  field: ProductSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ProductSortFields {
  Description = 'description',
  Id = 'id',
  ImageUrl = 'imageUrl',
  IsAvailable = 'isAvailable',
  Name = 'name',
  Price = 'price',
  Type = 'type',
  User = 'user'
}

export type ProductSumAggregate = {
  __typename?: 'ProductSumAggregate';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  user?: Maybe<Scalars['Float']>;
};

export type Query = {
  __typename?: 'Query';
  order?: Maybe<Order>;
  orderAggregate: Array<OrderAggregateResponse>;
  orderProduct?: Maybe<OrderProduct>;
  orderProductAggregate: Array<OrderProductAggregateResponse>;
  orderProducts: OrderProductConnection;
  orders: OrderConnection;
  product?: Maybe<Product>;
  products: ProductConnection;
  user?: Maybe<User>;
  users: UserConnection;
};


export type QueryOrderArgs = {
  id: Scalars['ID'];
};


export type QueryOrderAggregateArgs = {
  filter?: InputMaybe<OrderAggregateFilter>;
};


export type QueryOrderProductArgs = {
  id: Scalars['ID'];
};


export type QueryOrderProductAggregateArgs = {
  filter?: InputMaybe<OrderProductAggregateFilter>;
};


export type QueryOrderProductsArgs = {
  filter?: InputMaybe<OrderProductFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<OrderProductSort>>;
};


export type QueryOrdersArgs = {
  filter?: InputMaybe<OrderFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<OrderSort>>;
};


export type QueryProductArgs = {
  id: Scalars['ID'];
};


export type QueryProductsArgs = {
  filter?: InputMaybe<ProductFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ProductSort>>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUsersArgs = {
  filter?: InputMaybe<UserFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<UserSort>>;
};

export type SetOrderIdOnOrderProductInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetOrderProductsOnOrderInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetProductIdOnOrderProductInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetProductsOnUserInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetUserOnOrderInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetUserOnProductInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

/** Sort Directions */
export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

/** Sort Nulls Options */
export enum SortNulls {
  NullsFirst = 'NULLS_FIRST',
  NullsLast = 'NULLS_LAST'
}

export type StringFieldComparison = {
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  iLike?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
  notILike?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  notLike?: InputMaybe<Scalars['String']>;
};

export type UpdateOneOrderProductInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateOrderProduct;
};

export type UpdateOneProductInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateProduct;
};

export type UpdateOneUserInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateUser;
};

export type UpdateOrderProduct = {
  created?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  orderId?: InputMaybe<Scalars['Float']>;
  productId?: InputMaybe<Scalars['Float']>;
  quantity?: InputMaybe<Scalars['Float']>;
  totalPrice?: InputMaybe<Scalars['Float']>;
  unitPrice?: InputMaybe<Scalars['Float']>;
  updated?: InputMaybe<Scalars['DateTime']>;
};

export type UpdateProduct = {
  created?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  isAvailable?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  type?: InputMaybe<Scalars['String']>;
  updated?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<Scalars['Float']>;
};

export type UpdateUser = {
  created?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  updated?: InputMaybe<Scalars['DateTime']>;
};

export type User = {
  __typename?: 'User';
  created: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  products: Array<Product>;
  role: Scalars['String'];
  updated: Scalars['DateTime'];
};


export type UserProductsArgs = {
  filter?: InputMaybe<ProductFilter>;
  sorting?: InputMaybe<Array<ProductSort>>;
};

export type UserAggregateGroupBy = {
  __typename?: 'UserAggregateGroupBy';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
};

export type UserAvgAggregate = {
  __typename?: 'UserAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type UserConnection = {
  __typename?: 'UserConnection';
  /** Array of edges. */
  edges: Array<UserEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  email?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  role?: Maybe<Scalars['Int']>;
};

export type UserDeleteResponse = {
  __typename?: 'UserDeleteResponse';
  created?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
};

export type UserEdge = {
  __typename?: 'UserEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the User */
  node: User;
};

export type UserFilter = {
  and?: InputMaybe<Array<UserFilter>>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UserFilter>>;
  products?: InputMaybe<UserFilterProductFilter>;
  role?: InputMaybe<StringFieldComparison>;
};

export type UserFilterProductFilter = {
  and?: InputMaybe<Array<UserFilterProductFilter>>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  imageUrl?: InputMaybe<StringFieldComparison>;
  isAvailable?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UserFilterProductFilter>>;
  price?: InputMaybe<NumberFieldComparison>;
  type?: InputMaybe<StringFieldComparison>;
  user?: InputMaybe<NumberFieldComparison>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
};

export type UserSort = {
  direction: SortDirection;
  field: UserSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum UserSortFields {
  Email = 'email',
  Id = 'id',
  Name = 'name',
  Role = 'role'
}

export type UserSumAggregate = {
  __typename?: 'UserSumAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type CreateOrderMutationVariables = Exact<{
  user: Scalars['Float'];
  input?: InputMaybe<Array<OrderProductInput> | OrderProductInput>;
}>;


export type CreateOrderMutation = { __typename?: 'Mutation', createOrder: { __typename?: 'Order', id: string, status: string, price: number, user: { __typename?: 'User', name: string, id: string }, orderProducts: Array<{ __typename?: 'OrderProduct', id: string, quantity: number, unitPrice: number, totalPrice: number, productId: { __typename?: 'Product', name: string, imageUrl: string } }> } };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', access_token: string, user: { __typename?: 'User', id: string, name: string, role: string } } };

export type OrderAggregateQueryVariables = Exact<{ [key: string]: never; }>;


export type OrderAggregateQuery = { __typename?: 'Query', orderAggregate: Array<{ __typename?: 'OrderAggregateResponse', sum?: { __typename?: 'OrderSumAggregate', price?: number | null | undefined } | null | undefined, count?: { __typename?: 'OrderCountAggregate', id?: number | null | undefined } | null | undefined }> };

export type OrdersQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type OrdersQuery = { __typename?: 'Query', orders: { __typename?: 'OrderConnection', totalCount: number, pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null | undefined, hasPreviousPage?: boolean | null | undefined }, nodes: Array<{ __typename?: 'Order', id: string, price: number, created: any, status: string, user: { __typename?: 'User', id: string, name: string, email: string }, orderProducts: Array<{ __typename?: 'OrderProduct', id: string, quantity: number, unitPrice: number, totalPrice: number, productId: { __typename?: 'Product', id: string, price: number, name: string, description: string, imageUrl: string, isAvailable: boolean } }> }> } };

export type CreateProductMutationVariables = Exact<{
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  isAvailable?: InputMaybe<Scalars['Boolean']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  user: Scalars['Float'];
}>;


export type CreateProductMutation = { __typename?: 'Mutation', createOneProduct: { __typename?: 'Product', id: string, name: string, description: string, imageUrl: string, price: number, isAvailable: boolean, created: any, updated: any } };

export type UpdateProductMutationVariables = Exact<{
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  isAvailable?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
}>;


export type UpdateProductMutation = { __typename?: 'Mutation', updateOneProduct: { __typename?: 'Product', id: string, name: string, description: string, imageUrl: string, price: number, isAvailable: boolean, created: any, updated: any } };

export type AdminProductsQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type AdminProductsQuery = { __typename?: 'Query', products: { __typename?: 'ProductConnection', totalCount: number, pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null | undefined, hasPreviousPage?: boolean | null | undefined }, nodes: Array<{ __typename?: 'Product', id: string, name: string, description: string, imageUrl: string, price: number, isAvailable: boolean, created: any, updated: any }> } };

export type ProductQueryVariables = Exact<{
  productId: Scalars['ID'];
}>;


export type ProductQuery = { __typename?: 'Query', product?: { __typename?: 'Product', id: string, name: string, price: number, description: string, imageUrl: string, user: { __typename?: 'User', name: string, id: string } } | null | undefined };

export type ProductsQueryVariables = Exact<{
  isAvailable: Scalars['Boolean'];
  offset?: InputMaybe<Scalars['Int']>;
  excludeId?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  lowerPrice?: InputMaybe<Scalars['Float']>;
  upperPrice?: InputMaybe<Scalars['Float']>;
}>;


export type ProductsQuery = { __typename?: 'Query', products: { __typename?: 'ProductConnection', totalCount: number, pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null | undefined, hasPreviousPage?: boolean | null | undefined }, nodes: Array<{ __typename?: 'Product', id: string, name: string, description: string, imageUrl: string, price: number, created: any, updated: any, user: { __typename?: 'User', id: string, name: string } }> } };


export const CreateOrderDocument = gql`
    mutation createOrder($user: Float!, $input: [OrderProductInput!]) {
  createOrder(input: {user: $user, orderItems: $input}) {
    id
    status
    price
    user {
      name
      id
    }
    orderProducts {
      id
      quantity
      unitPrice
      totalPrice
      productId {
        name
        imageUrl
      }
    }
  }
}
    `;
export type CreateOrderMutationFn = Apollo.MutationFunction<CreateOrderMutation, CreateOrderMutationVariables>;

/**
 * __useCreateOrderMutation__
 *
 * To run a mutation, you first call `useCreateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrderMutation, { data, loading, error }] = useCreateOrderMutation({
 *   variables: {
 *      user: // value for 'user'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOrderMutation(baseOptions?: Apollo.MutationHookOptions<CreateOrderMutation, CreateOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOrderMutation, CreateOrderMutationVariables>(CreateOrderDocument, options);
      }
export type CreateOrderMutationHookResult = ReturnType<typeof useCreateOrderMutation>;
export type CreateOrderMutationResult = Apollo.MutationResult<CreateOrderMutation>;
export type CreateOrderMutationOptions = Apollo.BaseMutationOptions<CreateOrderMutation, CreateOrderMutationVariables>;
export const LoginDocument = gql`
    mutation login($email: String!, $password: String!) {
  login(input: {email: $email, password: $password}) {
    access_token
    user {
      id
      name
      role
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const OrderAggregateDocument = gql`
    query orderAggregate {
  orderAggregate {
    sum {
      price
    }
    count {
      id
    }
  }
}
    `;

/**
 * __useOrderAggregateQuery__
 *
 * To run a query within a React component, call `useOrderAggregateQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrderAggregateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrderAggregateQuery({
 *   variables: {
 *   },
 * });
 */
export function useOrderAggregateQuery(baseOptions?: Apollo.QueryHookOptions<OrderAggregateQuery, OrderAggregateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OrderAggregateQuery, OrderAggregateQueryVariables>(OrderAggregateDocument, options);
      }
export function useOrderAggregateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrderAggregateQuery, OrderAggregateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OrderAggregateQuery, OrderAggregateQueryVariables>(OrderAggregateDocument, options);
        }
export type OrderAggregateQueryHookResult = ReturnType<typeof useOrderAggregateQuery>;
export type OrderAggregateLazyQueryHookResult = ReturnType<typeof useOrderAggregateLazyQuery>;
export type OrderAggregateQueryResult = Apollo.QueryResult<OrderAggregateQuery, OrderAggregateQueryVariables>;
export const OrdersDocument = gql`
    query orders($offset: Int) {
  orders(paging: {limit: 10, offset: $offset}) {
    totalCount
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    nodes {
      id
      price
      created
      status
      user {
        id
        name
        email
      }
      orderProducts {
        id
        quantity
        unitPrice
        totalPrice
        productId {
          id
          price
          name
          description
          imageUrl
          isAvailable
        }
      }
    }
  }
}
    `;

/**
 * __useOrdersQuery__
 *
 * To run a query within a React component, call `useOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrdersQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useOrdersQuery(baseOptions?: Apollo.QueryHookOptions<OrdersQuery, OrdersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OrdersQuery, OrdersQueryVariables>(OrdersDocument, options);
      }
export function useOrdersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrdersQuery, OrdersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OrdersQuery, OrdersQueryVariables>(OrdersDocument, options);
        }
export type OrdersQueryHookResult = ReturnType<typeof useOrdersQuery>;
export type OrdersLazyQueryHookResult = ReturnType<typeof useOrdersLazyQuery>;
export type OrdersQueryResult = Apollo.QueryResult<OrdersQuery, OrdersQueryVariables>;
export const CreateProductDocument = gql`
    mutation createProduct($name: String, $description: String, $price: Float, $isAvailable: Boolean, $imageUrl: String, $user: Float!) {
  createOneProduct(
    input: {product: {name: $name, price: $price, isAvailable: $isAvailable, description: $description, imageUrl: $imageUrl, user: $user, type: "tech"}}
  ) {
    id
    name
    description
    imageUrl
    price
    isAvailable
    created
    updated
  }
}
    `;
export type CreateProductMutationFn = Apollo.MutationFunction<CreateProductMutation, CreateProductMutationVariables>;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      name: // value for 'name'
 *      description: // value for 'description'
 *      price: // value for 'price'
 *      isAvailable: // value for 'isAvailable'
 *      imageUrl: // value for 'imageUrl'
 *      user: // value for 'user'
 *   },
 * });
 */
export function useCreateProductMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductMutation, CreateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument, options);
      }
export type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>;
export type CreateProductMutationResult = Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<CreateProductMutation, CreateProductMutationVariables>;
export const UpdateProductDocument = gql`
    mutation updateProduct($name: String, $description: String, $price: Float, $isAvailable: Boolean, $id: ID!) {
  updateOneProduct(
    input: {id: $id, update: {name: $name, price: $price, isAvailable: $isAvailable, description: $description}}
  ) {
    id
    name
    description
    imageUrl
    price
    isAvailable
    created
    updated
  }
}
    `;
export type UpdateProductMutationFn = Apollo.MutationFunction<UpdateProductMutation, UpdateProductMutationVariables>;

/**
 * __useUpdateProductMutation__
 *
 * To run a mutation, you first call `useUpdateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductMutation, { data, loading, error }] = useUpdateProductMutation({
 *   variables: {
 *      name: // value for 'name'
 *      description: // value for 'description'
 *      price: // value for 'price'
 *      isAvailable: // value for 'isAvailable'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateProductMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProductMutation, UpdateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProductMutation, UpdateProductMutationVariables>(UpdateProductDocument, options);
      }
export type UpdateProductMutationHookResult = ReturnType<typeof useUpdateProductMutation>;
export type UpdateProductMutationResult = Apollo.MutationResult<UpdateProductMutation>;
export type UpdateProductMutationOptions = Apollo.BaseMutationOptions<UpdateProductMutation, UpdateProductMutationVariables>;
export const AdminProductsDocument = gql`
    query adminProducts($offset: Int) {
  products(paging: {limit: 10, offset: $offset}) {
    totalCount
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    nodes {
      id
      name
      description
      imageUrl
      price
      isAvailable
      created
      updated
    }
  }
}
    `;

/**
 * __useAdminProductsQuery__
 *
 * To run a query within a React component, call `useAdminProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminProductsQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useAdminProductsQuery(baseOptions?: Apollo.QueryHookOptions<AdminProductsQuery, AdminProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AdminProductsQuery, AdminProductsQueryVariables>(AdminProductsDocument, options);
      }
export function useAdminProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AdminProductsQuery, AdminProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AdminProductsQuery, AdminProductsQueryVariables>(AdminProductsDocument, options);
        }
export type AdminProductsQueryHookResult = ReturnType<typeof useAdminProductsQuery>;
export type AdminProductsLazyQueryHookResult = ReturnType<typeof useAdminProductsLazyQuery>;
export type AdminProductsQueryResult = Apollo.QueryResult<AdminProductsQuery, AdminProductsQueryVariables>;
export const ProductDocument = gql`
    query product($productId: ID!) {
  product(id: $productId) {
    id
    name
    price
    description
    imageUrl
    user {
      name
      id
    }
  }
}
    `;

/**
 * __useProductQuery__
 *
 * To run a query within a React component, call `useProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductQuery({
 *   variables: {
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useProductQuery(baseOptions: Apollo.QueryHookOptions<ProductQuery, ProductQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
      }
export function useProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductQuery, ProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
        }
export type ProductQueryHookResult = ReturnType<typeof useProductQuery>;
export type ProductLazyQueryHookResult = ReturnType<typeof useProductLazyQuery>;
export type ProductQueryResult = Apollo.QueryResult<ProductQuery, ProductQueryVariables>;
export const ProductsDocument = gql`
    query products($isAvailable: Boolean!, $offset: Int, $excludeId: ID, $name: String, $lowerPrice: Float, $upperPrice: Float) {
  products(
    filter: {isAvailable: {is: $isAvailable}, id: {neq: $excludeId}, name: {like: $name}, and: [{price: {gte: $lowerPrice}}, {price: {lte: $upperPrice}}]}
    paging: {limit: 16, offset: $offset}
  ) {
    totalCount
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    nodes {
      id
      name
      description
      imageUrl
      price
      user {
        id
        name
      }
      created
      updated
    }
  }
}
    `;

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *      isAvailable: // value for 'isAvailable'
 *      offset: // value for 'offset'
 *      excludeId: // value for 'excludeId'
 *      name: // value for 'name'
 *      lowerPrice: // value for 'lowerPrice'
 *      upperPrice: // value for 'upperPrice'
 *   },
 * });
 */
export function useProductsQuery(baseOptions: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
      }
export function useProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
        }
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;
export type ProductsQueryResult = Apollo.QueryResult<ProductsQuery, ProductsQueryVariables>;