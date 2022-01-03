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

export type CreateManyOrderProductsInput = {
  /** Array of records to create */
  orderProducts: Array<CreateOrderProduct>;
};

export type CreateManyOrdersInput = {
  /** Array of records to create */
  orders: Array<CreateOrder>;
};

export type CreateManyProductsInput = {
  /** Array of records to create */
  products: Array<CreateProduct>;
};

export type CreateOneOrderInput = {
  /** The record to create */
  order: CreateOrder;
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

export type DeleteManyOrderProductsInput = {
  /** Filter to find records to delete */
  filter: OrderProductDeleteFilter;
};

export type DeleteManyOrdersInput = {
  /** Filter to find records to delete */
  filter: OrderDeleteFilter;
};

export type DeleteManyProductsInput = {
  /** Filter to find records to delete */
  filter: ProductDeleteFilter;
};

export type DeleteManyResponse = {
  __typename?: 'DeleteManyResponse';
  /** The number of records deleted. */
  deletedCount: Scalars['Int'];
};

export type DeleteOneOrderInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneOrderProductInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneProductInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
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
  createManyOrderProducts: Array<OrderProduct>;
  createManyOrders: Array<Order>;
  createManyProducts: Array<Product>;
  createOneOrder: Order;
  createOneOrderProduct: OrderProduct;
  createOneProduct: Product;
  createOrder: Order;
  createUser: User;
  deleteManyOrderProducts: DeleteManyResponse;
  deleteManyOrders: DeleteManyResponse;
  deleteManyProducts: DeleteManyResponse;
  deleteOneOrder: OrderDeleteResponse;
  deleteOneOrderProduct: OrderProductDeleteResponse;
  deleteOneProduct: ProductDeleteResponse;
  deleteOneUser: UserDeleteResponse;
  login: LoginResponse;
  setOrderIdOnOrderProduct: OrderProduct;
  setOrderProductsOnOrder: Order;
  setProductIdOnOrderProduct: OrderProduct;
  setProductsOnUser: User;
  setUserOnOrder: Order;
  setUserOnProduct: Product;
  updateManyOrderProducts: UpdateManyResponse;
  updateManyOrders: UpdateManyResponse;
  updateManyProducts: UpdateManyResponse;
  updateOneOrder: Order;
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


export type MutationCreateManyOrderProductsArgs = {
  input: CreateManyOrderProductsInput;
};


export type MutationCreateManyOrdersArgs = {
  input: CreateManyOrdersInput;
};


export type MutationCreateManyProductsArgs = {
  input: CreateManyProductsInput;
};


export type MutationCreateOneOrderArgs = {
  input: CreateOneOrderInput;
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


export type MutationDeleteManyOrderProductsArgs = {
  input: DeleteManyOrderProductsInput;
};


export type MutationDeleteManyOrdersArgs = {
  input: DeleteManyOrdersInput;
};


export type MutationDeleteManyProductsArgs = {
  input: DeleteManyProductsInput;
};


export type MutationDeleteOneOrderArgs = {
  input: DeleteOneOrderInput;
};


export type MutationDeleteOneOrderProductArgs = {
  input: DeleteOneOrderProductInput;
};


export type MutationDeleteOneProductArgs = {
  input: DeleteOneProductInput;
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


export type MutationUpdateManyOrderProductsArgs = {
  input: UpdateManyOrderProductsInput;
};


export type MutationUpdateManyOrdersArgs = {
  input: UpdateManyOrdersInput;
};


export type MutationUpdateManyProductsArgs = {
  input: UpdateManyProductsInput;
};


export type MutationUpdateOneOrderArgs = {
  input: UpdateOneOrderInput;
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
  price: Scalars['Float'];
  status: Scalars['String'];
  updated: Scalars['DateTime'];
  user: User;
};


export type OrderOrderProductsArgs = {
  filter?: InputMaybe<OrderProductFilter>;
  sorting?: InputMaybe<Array<OrderProductSort>>;
};

export type OrderAggregateGroupBy = {
  __typename?: 'OrderAggregateGroupBy';
  id?: Maybe<Scalars['ID']>;
  status?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['Float']>;
};

export type OrderAvgAggregate = {
  __typename?: 'OrderAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  user?: Maybe<Scalars['Float']>;
};

export type OrderConnection = {
  __typename?: 'OrderConnection';
  /** Array of edges. */
  edges: Array<OrderEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type OrderCountAggregate = {
  __typename?: 'OrderCountAggregate';
  id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['Int']>;
};

export type OrderDeleteFilter = {
  and?: InputMaybe<Array<OrderDeleteFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderDeleteFilter>>;
  status?: InputMaybe<StringFieldComparison>;
  user?: InputMaybe<NumberFieldComparison>;
};

export type OrderDeleteResponse = {
  __typename?: 'OrderDeleteResponse';
  created?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  price?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  user?: Maybe<Scalars['Float']>;
};

export type OrderEdge = {
  __typename?: 'OrderEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the Order */
  node: Order;
};

export type OrderFilter = {
  and?: InputMaybe<Array<OrderFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilter>>;
  orderProducts?: InputMaybe<OrderFilterOrderProductFilter>;
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
  status?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['Float']>;
};

export type OrderMinAggregate = {
  __typename?: 'OrderMinAggregate';
  id?: Maybe<Scalars['ID']>;
  status?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['Float']>;
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
  /** Array of edges. */
  edges: Array<OrderProductEdge>;
  /** Paging information */
  pageInfo: PageInfo;
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

export type OrderProductDeleteFilter = {
  and?: InputMaybe<Array<OrderProductDeleteFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderProductDeleteFilter>>;
  orderId?: InputMaybe<NumberFieldComparison>;
  productId?: InputMaybe<NumberFieldComparison>;
  quantity?: InputMaybe<NumberFieldComparison>;
  totalPrice?: InputMaybe<NumberFieldComparison>;
  unitPrice?: InputMaybe<NumberFieldComparison>;
};

export type OrderProductDeleteResponse = {
  __typename?: 'OrderProductDeleteResponse';
  created?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  orderId?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  totalPrice?: Maybe<Scalars['Float']>;
  unitPrice?: Maybe<Scalars['Float']>;
  updated?: Maybe<Scalars['DateTime']>;
};

export type OrderProductEdge = {
  __typename?: 'OrderProductEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the OrderProduct */
  node: OrderProduct;
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

export type OrderProductUpdateFilter = {
  and?: InputMaybe<Array<OrderProductUpdateFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderProductUpdateFilter>>;
  orderId?: InputMaybe<NumberFieldComparison>;
  productId?: InputMaybe<NumberFieldComparison>;
  quantity?: InputMaybe<NumberFieldComparison>;
  totalPrice?: InputMaybe<NumberFieldComparison>;
  unitPrice?: InputMaybe<NumberFieldComparison>;
};

export type OrderSort = {
  direction: SortDirection;
  field: OrderSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum OrderSortFields {
  Id = 'id',
  Status = 'status',
  User = 'user'
}

export type OrderSumAggregate = {
  __typename?: 'OrderSumAggregate';
  id?: Maybe<Scalars['Float']>;
  user?: Maybe<Scalars['Float']>;
};

export type OrderUpdateFilter = {
  and?: InputMaybe<Array<OrderUpdateFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderUpdateFilter>>;
  status?: InputMaybe<StringFieldComparison>;
  user?: InputMaybe<NumberFieldComparison>;
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

export type ProductDeleteFilter = {
  and?: InputMaybe<Array<ProductDeleteFilter>>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  imageUrl?: InputMaybe<StringFieldComparison>;
  isAvailable?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductDeleteFilter>>;
  price?: InputMaybe<NumberFieldComparison>;
  type?: InputMaybe<StringFieldComparison>;
  user?: InputMaybe<NumberFieldComparison>;
};

export type ProductDeleteResponse = {
  __typename?: 'ProductDeleteResponse';
  created?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  imageUrl?: Maybe<Scalars['String']>;
  isAvailable?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['DateTime']>;
  user?: Maybe<Scalars['Float']>;
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

export type ProductUpdateFilter = {
  and?: InputMaybe<Array<ProductUpdateFilter>>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  imageUrl?: InputMaybe<StringFieldComparison>;
  isAvailable?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductUpdateFilter>>;
  price?: InputMaybe<NumberFieldComparison>;
  type?: InputMaybe<StringFieldComparison>;
  user?: InputMaybe<NumberFieldComparison>;
};

export type Query = {
  __typename?: 'Query';
  order?: Maybe<Order>;
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


export type QueryOrderProductArgs = {
  id: Scalars['ID'];
};


export type QueryOrderProductAggregateArgs = {
  filter?: InputMaybe<OrderProductAggregateFilter>;
};


export type QueryOrderProductsArgs = {
  filter?: InputMaybe<OrderProductFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<OrderProductSort>>;
};


export type QueryOrdersArgs = {
  filter?: InputMaybe<OrderFilter>;
  paging?: InputMaybe<CursorPaging>;
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

export type UpdateManyOrderProductsInput = {
  /** Filter used to find fields to update */
  filter: OrderProductUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateOrderProduct;
};

export type UpdateManyOrdersInput = {
  /** Filter used to find fields to update */
  filter: OrderUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateOrder;
};

export type UpdateManyProductsInput = {
  /** Filter used to find fields to update */
  filter: ProductUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateProduct;
};

export type UpdateManyResponse = {
  __typename?: 'UpdateManyResponse';
  /** The number of records updated. */
  updatedCount: Scalars['Int'];
};

export type UpdateOneOrderInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateOrder;
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

export type UpdateOrder = {
  created?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  price?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<Scalars['String']>;
  updated?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<Scalars['Float']>;
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

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', access_token: string, user: { __typename?: 'User', id: string, name: string, role: string } } };

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
}>;


export type ProductsQuery = { __typename?: 'Query', products: { __typename?: 'ProductConnection', totalCount: number, pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null | undefined, hasPreviousPage?: boolean | null | undefined }, nodes: Array<{ __typename?: 'Product', id: string, name: string, description: string, imageUrl: string, price: number, created: any, updated: any, user: { __typename?: 'User', id: string, name: string } }> } };


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
    query products($isAvailable: Boolean!, $offset: Int, $excludeId: ID) {
  products(
    filter: {isAvailable: {is: $isAvailable}, id: {neq: $excludeId}}
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