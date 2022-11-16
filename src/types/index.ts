import { GetStaticPathsResult } from 'next';
import { CategoriesQuery, CategoryQuery, OrderQuery, OrdersQuery, ProductQuery, ProductReviewsQuery, ProductsQuery, ReviewsQuery } from '@/graphql/generated';

export type Unpacked<T> = T extends (infer U)[] ? U : T;

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;

export type UnMaybe<Obj> = {
    [Prop in keyof Obj]: Obj[Prop] extends Maybe<infer T> ? T : Obj[Prop]
}

// export type Paths = Array<{ params: { id: string } }>;
export type StaticPaths = GetStaticPathsResult['paths'];

export type Products = ProductsQuery['products'];
export type Product = Unpacked<ProductsQuery['products']>;
export type ProductDetails = ProductQuery['product'];

export type Categories = CategoriesQuery['categories'];
export type Category = Unpacked<CategoriesQuery['categories']>;
export type CategoryDetails = CategoryQuery['category'];

export type Reviews = ReviewsQuery['reviews'];
export type Review = Unpacked<ReviewsQuery['reviews']>;
export type ProductReviews = ProductReviewsQuery['productReviews'];
export type ProductReview = Unpacked<ProductReviewsQuery['productReviews']>;

export type Orders = OrdersQuery['orders'];
export type Order = Unpacked<OrdersQuery['orders']>;
export type OrderDetails = OrderQuery['order'];
export type OrderItem = Unpacked<NonNullable<OrderDetails>['items']>;
