import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Byte: number;
  /** An RFC-3339 compliant Full Date Scalar */
  Date: Date;
  /** An RFC-3339 compliant DateTime Scalar */
  DateTime: Date;
  Email: string;
  /** A JSON scalar */
  JSON: object;
  /** 24-hour clock time value string in the format `hh:mm:ss` or `hh:mm:ss.sss`. */
  LocalTime: Date;
  /** A IETF BCP 47 language tag */
  Locale: string;
  /** An Float scalar that must be greater than or equal to zero */
  NonNegativeFloat: number;
  /** An Int scalar that must be greater than or equal to zero */
  NonNegativeInt: number;
  /** An object scalar */
  Object: object;
  /** An Float scalar that must be a positive value */
  PositiveFloat: number;
  /** An Int scalar that must be a positive value */
  PositiveInt: number;
  Short: number;
  /** An RFC-3339 compliant Full Time Scalar */
  Time: Date;
  /** A universally unique identifier compliant UUID Scalar */
  UUID: string;
  /** A Url scalar */
  Url: string;
};

/**
 * type ProductMedia {
 *     id: Int
 *     product: Product
 *     media: Media
 *     appearance: Appearance
 *     view: View
 * }
 */
export type Appearance = {
  __typename?: 'Appearance';
  colors?: Maybe<Array<Scalars['String']>>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  texture?: Maybe<Scalars['Boolean']>;
};

export type AppearanceInput = {
  colors?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
  texture?: InputMaybe<Scalars['Boolean']>;
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['Int'];
  name: Scalars['String'];
  parent?: Maybe<Category>;
};

export type CategoryInput = {
  name: Scalars['String'];
  parent?: InputMaybe<IdInt>;
};

export type IdInt = {
  id: Scalars['Int'];
};

export type IdString = {
  id: Scalars['String'];
};

export type Media = {
  __typename?: 'Media';
  contentType?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  /**  Url */
  name: Scalars['String'];
  originalFilename?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  user?: Maybe<User>;
};

export type MonthlyStatistics = {
  __typename?: 'MonthlyStatistics';
  count?: Maybe<Scalars['Float']>;
  month?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCategory?: Maybe<Category>;
  createOrder?: Maybe<Order>;
  createProduct?: Maybe<Product>;
  /**     deleteProduct(id: ID!): Product */
  createProductReview?: Maybe<ProductReview>;
  updateCategory?: Maybe<Category>;
  updateProduct?: Maybe<Product>;
};


export type MutationCreateCategoryArgs = {
  category: CategoryInput;
};


export type MutationCreateOrderArgs = {
  order: OrderInput;
};


export type MutationCreateProductArgs = {
  product: ProductInput;
};


export type MutationCreateProductReviewArgs = {
  productId: Scalars['ID'];
  productReviewInput: ProductReviewInput;
};


export type MutationUpdateCategoryArgs = {
  category: CategoryInput;
  id: Scalars['ID'];
};


export type MutationUpdateProductArgs = {
  id: Scalars['ID'];
  product: ProductInput;
};

export type Order = {
  __typename?: 'Order';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  items: Array<OrderItem>;
  notes?: Maybe<Scalars['String']>;
  status: OrderStatus;
  user: User;
};

export type OrderInput = {
  notes?: InputMaybe<Scalars['String']>;
};

export type OrderItem = {
  __typename?: 'OrderItem';
  id: Scalars['Int'];
  price: Scalars['NonNegativeFloat'];
  /**     order: Order */
  product: Product;
  quantity: Scalars['NonNegativeInt'];
};

export enum OrderStatus {
  AwaitingPayment = 'AWAITING_PAYMENT',
  Cancelled = 'CANCELLED',
  Confirmed = 'CONFIRMED',
  Delivered = 'DELIVERED',
  Shipped = 'SHIPPED'
}

export enum Perspective {
  Back = 'BACK',
  Front = 'FRONT',
  Left = 'LEFT',
  Right = 'RIGHT'
}

export type Product = {
  __typename?: 'Product';
  appearances?: Maybe<Array<Appearance>>;
  category: Category;
  description: Scalars['String'];
  enabled: Scalars['Boolean'];
  id: Scalars['Int'];
  name: Scalars['String'];
  price: Scalars['NonNegativeFloat'];
  tags?: Maybe<Array<Tag>>;
  views?: Maybe<Array<View>>;
};

export type ProductInput = {
  appearances?: InputMaybe<Array<InputMaybe<IdInt>>>;
  category: IdInt;
  description: Scalars['String'];
  enabled: Scalars['Boolean'];
  name: Scalars['String'];
  price: Scalars['NonNegativeFloat'];
  tags?: InputMaybe<Array<InputMaybe<IdInt>>>;
  views?: InputMaybe<Array<InputMaybe<IdInt>>>;
};

export type ProductReview = {
  __typename?: 'ProductReview';
  appearance?: Maybe<Appearance>;
  comment: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  product: Product;
  rating: Scalars['PositiveInt'];
  user: User;
};

export type ProductReviewInput = {
  /**
   *     user: UserInput
   *     user: IdString!
   */
  appearance?: InputMaybe<IdInt>;
  comment: Scalars['String'];
  rating: Scalars['PositiveInt'];
};

/**  GraphQLByte */
export type Query = {
  __typename?: 'Query';
  categories: Array<Category>;
  category?: Maybe<Category>;
  order?: Maybe<Order>;
  orders: Array<Order>;
  product?: Maybe<Product>;
  productReviews?: Maybe<Array<ProductReview>>;
  products: Array<Product>;
  /**
   *     productMedias: [ProductMedia]
   *     medias: [Media]
   */
  reviews: Array<ProductReview>;
  statistic?: Maybe<Statistic>;
};


/**  GraphQLByte */
export type QueryCategoryArgs = {
  id: Scalars['ID'];
};


/**  GraphQLByte */
export type QueryOrderArgs = {
  id: Scalars['ID'];
};


/**  GraphQLByte */
export type QueryProductArgs = {
  id: Scalars['ID'];
};


/**  GraphQLByte */
export type QueryProductReviewsArgs = {
  productId: Scalars['ID'];
};

export type Statistic = {
  __typename?: 'Statistic';
  ordersCount?: Maybe<Scalars['NonNegativeInt']>;
  productsCount?: Maybe<Scalars['NonNegativeInt']>;
  sales?: Maybe<Array<Maybe<MonthlyStatistics>>>;
  totalEarnings?: Maybe<Scalars['Float']>;
  visitors?: Maybe<Array<Maybe<MonthlyStatistics>>>;
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['Email'];
  /**     password: String */
  enabled: Scalars['Boolean'];
  id: Scalars['UUID'];
  name: Scalars['String'];
  username: Scalars['Email'];
};

export type UserInput = {
  email?: InputMaybe<Scalars['Email']>;
  /**     password: String */
  enabled?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['UUID']>;
  name?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['Email']>;
};

export type View = {
  __typename?: 'View';
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  perspective?: Maybe<Perspective>;
};

export type ProductDetailsFragment = { __typename?: 'Product', id: number, price: number, name: string, description: string, enabled: boolean, category: { __typename?: 'Category', id: number, name: string, parent?: { __typename?: 'Category', id: number, name: string } | null }, tags?: Array<{ __typename?: 'Tag', id: number, name: string }> | null, views?: Array<{ __typename?: 'View', id: number, name?: string | null, perspective?: Perspective | null }> | null, appearances?: Array<{ __typename?: 'Appearance', id: number, name?: string | null, texture?: boolean | null }> | null };

export type CreateCategoryMutationVariables = Exact<{
  category: CategoryInput;
}>;


export type CreateCategoryMutation = { __typename?: 'Mutation', createCategory?: { __typename?: 'Category', id: number, name: string, parent?: { __typename?: 'Category', id: number, name: string } | null } | null };

export type CreateOrderMutationVariables = Exact<{
  order: OrderInput;
}>;


export type CreateOrderMutation = { __typename?: 'Mutation', createOrder?: { __typename?: 'Order', id: number, createdAt?: Date | null, items: Array<{ __typename?: 'OrderItem', id: number, price: number, quantity: number, product: { __typename?: 'Product', id: number, name: string } }> } | null };

export type CreateProductMutationVariables = Exact<{
  product: ProductInput;
}>;


export type CreateProductMutation = { __typename?: 'Mutation', createProduct?: { __typename?: 'Product', id: number, price: number, name: string, description: string, enabled: boolean, category: { __typename?: 'Category', id: number, name: string, parent?: { __typename?: 'Category', id: number, name: string } | null }, tags?: Array<{ __typename?: 'Tag', id: number, name: string }> | null, views?: Array<{ __typename?: 'View', id: number, name?: string | null, perspective?: Perspective | null }> | null, appearances?: Array<{ __typename?: 'Appearance', id: number, name?: string | null, texture?: boolean | null }> | null } | null };

export type CreateProductReviewMutationVariables = Exact<{
  productId: Scalars['ID'];
  productReviewInput: ProductReviewInput;
}>;


export type CreateProductReviewMutation = { __typename?: 'Mutation', createProductReview?: { __typename?: 'ProductReview', id: number, comment: string, rating: number, user: { __typename?: 'User', id: string, name: string }, product: { __typename?: 'Product', id: number, name: string }, appearance?: { __typename?: 'Appearance', id: number, name?: string | null, texture?: boolean | null, colors?: Array<string> | null } | null } | null };

export type UpdateCategoryMutationVariables = Exact<{
  id: Scalars['ID'];
  category: CategoryInput;
}>;


export type UpdateCategoryMutation = { __typename?: 'Mutation', updateCategory?: { __typename?: 'Category', id: number, name: string, parent?: { __typename?: 'Category', id: number, name: string } | null } | null };

export type UpdateProductMutationVariables = Exact<{
  id: Scalars['ID'];
  product: ProductInput;
}>;


export type UpdateProductMutation = { __typename?: 'Mutation', updateProduct?: { __typename?: 'Product', id: number, price: number, name: string, description: string, enabled: boolean, category: { __typename?: 'Category', id: number, name: string, parent?: { __typename?: 'Category', id: number, name: string } | null }, tags?: Array<{ __typename?: 'Tag', id: number, name: string }> | null, views?: Array<{ __typename?: 'View', id: number, name?: string | null, perspective?: Perspective | null }> | null, appearances?: Array<{ __typename?: 'Appearance', id: number, name?: string | null, texture?: boolean | null }> | null } | null };

export type CategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesQuery = { __typename?: 'Query', categories: Array<{ __typename?: 'Category', id: number, name: string, parent?: { __typename?: 'Category', id: number, name: string } | null }> };

export type CategoryQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type CategoryQuery = { __typename?: 'Query', category?: { __typename?: 'Category', id: number, name: string, parent?: { __typename?: 'Category', id: number, name: string } | null } | null };

export type OrderQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type OrderQuery = { __typename?: 'Query', order?: { __typename?: 'Order', id: number, status: OrderStatus, notes?: string | null, createdAt?: Date | null, items: Array<{ __typename?: 'OrderItem', id: number, price: number, quantity: number, product: { __typename?: 'Product', id: number, name: string, price: number } }>, user: { __typename?: 'User', id: string, name: string, email: string } } | null };

export type OrdersQueryVariables = Exact<{ [key: string]: never; }>;


export type OrdersQuery = { __typename?: 'Query', orders: Array<{ __typename?: 'Order', id: number, status: OrderStatus, notes?: string | null, createdAt?: Date | null, items: Array<{ __typename?: 'OrderItem', id: number, price: number, quantity: number, product: { __typename?: 'Product', id: number, name: string, price: number } }>, user: { __typename?: 'User', id: string, name: string, email: string } }> };

export type OrdersIdQueryVariables = Exact<{ [key: string]: never; }>;


export type OrdersIdQuery = { __typename?: 'Query', orders: Array<{ __typename?: 'Order', id: number }> };

export type ProductQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ProductQuery = { __typename?: 'Query', product?: { __typename?: 'Product', id: number, price: number, name: string, description: string, enabled: boolean, category: { __typename?: 'Category', id: number, name: string, parent?: { __typename?: 'Category', id: number, name: string } | null }, tags?: Array<{ __typename?: 'Tag', id: number, name: string }> | null, views?: Array<{ __typename?: 'View', id: number, name?: string | null, perspective?: Perspective | null }> | null, appearances?: Array<{ __typename?: 'Appearance', id: number, name?: string | null, texture?: boolean | null }> | null } | null };

export type ProductReviewsQueryVariables = Exact<{
  productId: Scalars['ID'];
}>;


export type ProductReviewsQuery = { __typename?: 'Query', productReviews?: Array<{ __typename?: 'ProductReview', id: number, comment: string, rating: number, createdAt: Date, product: { __typename?: 'Product', id: number, name: string }, user: { __typename?: 'User', id: string, name: string } }> | null };

export type ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', id: number, price: number, name: string, description: string, enabled: boolean, category: { __typename?: 'Category', id: number, name: string, parent?: { __typename?: 'Category', id: number, name: string } | null }, tags?: Array<{ __typename?: 'Tag', id: number, name: string }> | null, views?: Array<{ __typename?: 'View', id: number, name?: string | null, perspective?: Perspective | null }> | null, appearances?: Array<{ __typename?: 'Appearance', id: number, name?: string | null, texture?: boolean | null }> | null }> };

export type ProductsIdQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsIdQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', id: number }> };

export type ReviewsQueryVariables = Exact<{ [key: string]: never; }>;


export type ReviewsQuery = { __typename?: 'Query', reviews: Array<{ __typename?: 'ProductReview', id: number, comment: string, rating: number, createdAt: Date, product: { __typename?: 'Product', id: number, name: string }, user: { __typename?: 'User', id: string, name: string } }> };

export type StatisticQueryVariables = Exact<{ [key: string]: never; }>;


export type StatisticQuery = { __typename?: 'Query', statistic?: { __typename?: 'Statistic', productsCount?: number | null, ordersCount?: number | null, totalEarnings?: number | null, sales?: Array<{ __typename?: 'MonthlyStatistics', month?: string | null, count?: number | null } | null> | null, visitors?: Array<{ __typename?: 'MonthlyStatistics', month?: string | null, count?: number | null } | null> | null } | null };

export const ProductDetailsFragmentDoc = gql`
    fragment ProductDetails on Product {
  id
  price
  name
  description
  enabled
  category {
    ... on Category {
      id
      name
      parent {
        id
        name
      }
    }
  }
  tags {
    ... on Tag {
      id
      name
    }
  }
  views {
    ... on View {
      id
      name
      perspective
    }
  }
  appearances {
    ... on Appearance {
      id
      name
      texture
    }
  }
}
    `;
export const CreateCategoryDocument = gql`
    mutation CreateCategory($category: CategoryInput!) {
  createCategory(category: $category) {
    ... on Category {
      id
      name
      parent {
        id
        name
      }
    }
  }
}
    `;
export type CreateCategoryMutationFn = Apollo.MutationFunction<CreateCategoryMutation, CreateCategoryMutationVariables>;

/**
 * __useCreateCategoryMutation__
 *
 * To run a mutation, you first call `useCreateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCategoryMutation, { data, loading, error }] = useCreateCategoryMutation({
 *   variables: {
 *      category: // value for 'category'
 *   },
 * });
 */
export function useCreateCategoryMutation(baseOptions?: Apollo.MutationHookOptions<CreateCategoryMutation, CreateCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCategoryMutation, CreateCategoryMutationVariables>(CreateCategoryDocument, options);
      }
export type CreateCategoryMutationHookResult = ReturnType<typeof useCreateCategoryMutation>;
export type CreateCategoryMutationResult = Apollo.MutationResult<CreateCategoryMutation>;
export type CreateCategoryMutationOptions = Apollo.BaseMutationOptions<CreateCategoryMutation, CreateCategoryMutationVariables>;
export const CreateOrderDocument = gql`
    mutation CreateOrder($order: OrderInput!) {
  createOrder(order: $order) {
    ... on Order {
      id
      items {
        ... on OrderItem {
          id
          price
          quantity
          product {
            ... on Product {
              id
              name
            }
          }
        }
      }
      createdAt
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
 *      order: // value for 'order'
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
export const CreateProductDocument = gql`
    mutation CreateProduct($product: ProductInput!) {
  createProduct(product: $product) {
    ... on Product {
      id
      price
      name
      description
      enabled
      category {
        ... on Category {
          id
          name
          parent {
            id
            name
          }
        }
      }
      tags {
        ... on Tag {
          id
          name
        }
      }
      views {
        ... on View {
          id
          name
          perspective
        }
      }
      appearances {
        ... on Appearance {
          id
          name
          texture
        }
      }
    }
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
 *      product: // value for 'product'
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
export const CreateProductReviewDocument = gql`
    mutation CreateProductReview($productId: ID!, $productReviewInput: ProductReviewInput!) {
  createProductReview(
    productId: $productId
    productReviewInput: $productReviewInput
  ) {
    ... on ProductReview {
      id
      comment
      rating
      user {
        ... on User {
          id
          name
        }
      }
      product {
        ... on Product {
          id
          name
        }
      }
      appearance {
        ... on Appearance {
          id
          name
          texture
          colors
        }
      }
    }
  }
}
    `;
export type CreateProductReviewMutationFn = Apollo.MutationFunction<CreateProductReviewMutation, CreateProductReviewMutationVariables>;

/**
 * __useCreateProductReviewMutation__
 *
 * To run a mutation, you first call `useCreateProductReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductReviewMutation, { data, loading, error }] = useCreateProductReviewMutation({
 *   variables: {
 *      productId: // value for 'productId'
 *      productReviewInput: // value for 'productReviewInput'
 *   },
 * });
 */
export function useCreateProductReviewMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductReviewMutation, CreateProductReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProductReviewMutation, CreateProductReviewMutationVariables>(CreateProductReviewDocument, options);
      }
export type CreateProductReviewMutationHookResult = ReturnType<typeof useCreateProductReviewMutation>;
export type CreateProductReviewMutationResult = Apollo.MutationResult<CreateProductReviewMutation>;
export type CreateProductReviewMutationOptions = Apollo.BaseMutationOptions<CreateProductReviewMutation, CreateProductReviewMutationVariables>;
export const UpdateCategoryDocument = gql`
    mutation UpdateCategory($id: ID!, $category: CategoryInput!) {
  updateCategory(id: $id, category: $category) {
    ... on Category {
      id
      name
      parent {
        id
        name
      }
    }
  }
}
    `;
export type UpdateCategoryMutationFn = Apollo.MutationFunction<UpdateCategoryMutation, UpdateCategoryMutationVariables>;

/**
 * __useUpdateCategoryMutation__
 *
 * To run a mutation, you first call `useUpdateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCategoryMutation, { data, loading, error }] = useUpdateCategoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *      category: // value for 'category'
 *   },
 * });
 */
export function useUpdateCategoryMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCategoryMutation, UpdateCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCategoryMutation, UpdateCategoryMutationVariables>(UpdateCategoryDocument, options);
      }
export type UpdateCategoryMutationHookResult = ReturnType<typeof useUpdateCategoryMutation>;
export type UpdateCategoryMutationResult = Apollo.MutationResult<UpdateCategoryMutation>;
export type UpdateCategoryMutationOptions = Apollo.BaseMutationOptions<UpdateCategoryMutation, UpdateCategoryMutationVariables>;
export const UpdateProductDocument = gql`
    mutation UpdateProduct($id: ID!, $product: ProductInput!) {
  updateProduct(id: $id, product: $product) {
    ... on Product {
      id
      price
      name
      description
      enabled
      category {
        ... on Category {
          id
          name
          parent {
            id
            name
          }
        }
      }
      tags {
        ... on Tag {
          id
          name
        }
      }
      views {
        ... on View {
          id
          name
          perspective
        }
      }
      appearances {
        ... on Appearance {
          id
          name
          texture
        }
      }
    }
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
 *      id: // value for 'id'
 *      product: // value for 'product'
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
export const CategoriesDocument = gql`
    query Categories {
  categories {
    id
    name
    parent {
      ... on Category {
        id
        name
      }
    }
  }
}
    `;

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
      }
export function useCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
        }
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>;
export type CategoriesLazyQueryHookResult = ReturnType<typeof useCategoriesLazyQuery>;
export type CategoriesQueryResult = Apollo.QueryResult<CategoriesQuery, CategoriesQueryVariables>;
export const CategoryDocument = gql`
    query Category($id: ID!) {
  category(id: $id) {
    id
    name
    parent {
      ... on Category {
        id
        name
      }
    }
  }
}
    `;

/**
 * __useCategoryQuery__
 *
 * To run a query within a React component, call `useCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCategoryQuery(baseOptions: Apollo.QueryHookOptions<CategoryQuery, CategoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoryQuery, CategoryQueryVariables>(CategoryDocument, options);
      }
export function useCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoryQuery, CategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoryQuery, CategoryQueryVariables>(CategoryDocument, options);
        }
export type CategoryQueryHookResult = ReturnType<typeof useCategoryQuery>;
export type CategoryLazyQueryHookResult = ReturnType<typeof useCategoryLazyQuery>;
export type CategoryQueryResult = Apollo.QueryResult<CategoryQuery, CategoryQueryVariables>;
export const OrderDocument = gql`
    query Order($id: ID!) {
  order(id: $id) {
    ... on Order {
      id
      status
      notes
      items {
        ... on OrderItem {
          id
          price
          quantity
          product {
            ... on Product {
              id
              name
              price
            }
          }
        }
      }
      user {
        ... on User {
          id
          name
          email
        }
      }
      createdAt
    }
  }
}
    `;

/**
 * __useOrderQuery__
 *
 * To run a query within a React component, call `useOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrderQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useOrderQuery(baseOptions: Apollo.QueryHookOptions<OrderQuery, OrderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OrderQuery, OrderQueryVariables>(OrderDocument, options);
      }
export function useOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrderQuery, OrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OrderQuery, OrderQueryVariables>(OrderDocument, options);
        }
export type OrderQueryHookResult = ReturnType<typeof useOrderQuery>;
export type OrderLazyQueryHookResult = ReturnType<typeof useOrderLazyQuery>;
export type OrderQueryResult = Apollo.QueryResult<OrderQuery, OrderQueryVariables>;
export const OrdersDocument = gql`
    query Orders {
  orders {
    ... on Order {
      id
      status
      notes
      items {
        ... on OrderItem {
          id
          price
          quantity
          product {
            ... on Product {
              id
              name
              price
            }
          }
        }
      }
      user {
        ... on User {
          id
          name
          email
        }
      }
      createdAt
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
export const OrdersIdDocument = gql`
    query OrdersId {
  orders {
    ... on Order {
      id
    }
  }
}
    `;

/**
 * __useOrdersIdQuery__
 *
 * To run a query within a React component, call `useOrdersIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrdersIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrdersIdQuery({
 *   variables: {
 *   },
 * });
 */
export function useOrdersIdQuery(baseOptions?: Apollo.QueryHookOptions<OrdersIdQuery, OrdersIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OrdersIdQuery, OrdersIdQueryVariables>(OrdersIdDocument, options);
      }
export function useOrdersIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrdersIdQuery, OrdersIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OrdersIdQuery, OrdersIdQueryVariables>(OrdersIdDocument, options);
        }
export type OrdersIdQueryHookResult = ReturnType<typeof useOrdersIdQuery>;
export type OrdersIdLazyQueryHookResult = ReturnType<typeof useOrdersIdLazyQuery>;
export type OrdersIdQueryResult = Apollo.QueryResult<OrdersIdQuery, OrdersIdQueryVariables>;
export const ProductDocument = gql`
    query Product($id: ID!) {
  product(id: $id) {
    ... on Product {
      id
      price
      name
      description
      enabled
      category {
        ... on Category {
          id
          name
          parent {
            id
            name
          }
        }
      }
      tags {
        ... on Tag {
          id
          name
        }
      }
      views {
        ... on View {
          id
          name
          perspective
        }
      }
      appearances {
        ... on Appearance {
          id
          name
          texture
        }
      }
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
 *      id: // value for 'id'
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
export const ProductReviewsDocument = gql`
    query ProductReviews($productId: ID!) {
  productReviews(productId: $productId) {
    ... on ProductReview {
      id
      comment
      rating
      createdAt
      product {
        ... on Product {
          id
          name
        }
      }
      user {
        ... on User {
          id
          name
        }
      }
    }
  }
}
    `;

/**
 * __useProductReviewsQuery__
 *
 * To run a query within a React component, call `useProductReviewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductReviewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductReviewsQuery({
 *   variables: {
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useProductReviewsQuery(baseOptions: Apollo.QueryHookOptions<ProductReviewsQuery, ProductReviewsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductReviewsQuery, ProductReviewsQueryVariables>(ProductReviewsDocument, options);
      }
export function useProductReviewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductReviewsQuery, ProductReviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductReviewsQuery, ProductReviewsQueryVariables>(ProductReviewsDocument, options);
        }
export type ProductReviewsQueryHookResult = ReturnType<typeof useProductReviewsQuery>;
export type ProductReviewsLazyQueryHookResult = ReturnType<typeof useProductReviewsLazyQuery>;
export type ProductReviewsQueryResult = Apollo.QueryResult<ProductReviewsQuery, ProductReviewsQueryVariables>;
export const ProductsDocument = gql`
    query Products {
  products {
    ... on Product {
      id
      price
      name
      description
      enabled
      category {
        ... on Category {
          id
          name
          parent {
            id
            name
          }
        }
      }
      tags {
        ... on Tag {
          id
          name
        }
      }
      views {
        ... on View {
          id
          name
          perspective
        }
      }
      appearances {
        ... on Appearance {
          id
          name
          texture
        }
      }
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
 *   },
 * });
 */
export function useProductsQuery(baseOptions?: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
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
export const ProductsIdDocument = gql`
    query ProductsId {
  products {
    ... on Product {
      id
    }
  }
}
    `;

/**
 * __useProductsIdQuery__
 *
 * To run a query within a React component, call `useProductsIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsIdQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductsIdQuery(baseOptions?: Apollo.QueryHookOptions<ProductsIdQuery, ProductsIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsIdQuery, ProductsIdQueryVariables>(ProductsIdDocument, options);
      }
export function useProductsIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsIdQuery, ProductsIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsIdQuery, ProductsIdQueryVariables>(ProductsIdDocument, options);
        }
export type ProductsIdQueryHookResult = ReturnType<typeof useProductsIdQuery>;
export type ProductsIdLazyQueryHookResult = ReturnType<typeof useProductsIdLazyQuery>;
export type ProductsIdQueryResult = Apollo.QueryResult<ProductsIdQuery, ProductsIdQueryVariables>;
export const ReviewsDocument = gql`
    query Reviews {
  reviews {
    ... on ProductReview {
      id
      comment
      rating
      createdAt
      product {
        ... on Product {
          id
          name
        }
      }
      user {
        ... on User {
          id
          name
        }
      }
    }
  }
}
    `;

/**
 * __useReviewsQuery__
 *
 * To run a query within a React component, call `useReviewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useReviewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReviewsQuery({
 *   variables: {
 *   },
 * });
 */
export function useReviewsQuery(baseOptions?: Apollo.QueryHookOptions<ReviewsQuery, ReviewsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReviewsQuery, ReviewsQueryVariables>(ReviewsDocument, options);
      }
export function useReviewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReviewsQuery, ReviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReviewsQuery, ReviewsQueryVariables>(ReviewsDocument, options);
        }
export type ReviewsQueryHookResult = ReturnType<typeof useReviewsQuery>;
export type ReviewsLazyQueryHookResult = ReturnType<typeof useReviewsLazyQuery>;
export type ReviewsQueryResult = Apollo.QueryResult<ReviewsQuery, ReviewsQueryVariables>;
export const StatisticDocument = gql`
    query Statistic {
  statistic {
    ... on Statistic {
      productsCount
      ordersCount
      totalEarnings
      sales {
        month
        count
      }
      visitors {
        month
        count
      }
    }
  }
}
    `;

/**
 * __useStatisticQuery__
 *
 * To run a query within a React component, call `useStatisticQuery` and pass it any options that fit your needs.
 * When your component renders, `useStatisticQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStatisticQuery({
 *   variables: {
 *   },
 * });
 */
export function useStatisticQuery(baseOptions?: Apollo.QueryHookOptions<StatisticQuery, StatisticQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StatisticQuery, StatisticQueryVariables>(StatisticDocument, options);
      }
export function useStatisticLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StatisticQuery, StatisticQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StatisticQuery, StatisticQueryVariables>(StatisticDocument, options);
        }
export type StatisticQueryHookResult = ReturnType<typeof useStatisticQuery>;
export type StatisticLazyQueryHookResult = ReturnType<typeof useStatisticLazyQuery>;
export type StatisticQueryResult = Apollo.QueryResult<StatisticQuery, StatisticQueryVariables>;