/* eslint-disable no-unused-vars */
import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type AuthDto = {
  __typename?: 'AuthDTO';
  accessToken: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
  role: Scalars['String']['output'];
  username?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  logout: ResponseDto;
  refreshTokens: TokenDto;
  signin: AuthDto;
  signup: AuthDto;
};

export type MutationLogoutArgs = {
  id: Scalars['String']['input'];
};

export type MutationRefreshTokensArgs = {
  input: RefreshTokensInput;
};

export type MutationSigninArgs = {
  input: SigninInput;
};

export type MutationSignupArgs = {
  input: SignupInput;
};

export type Query = {
  __typename?: 'Query';
  hello: AuthDto;
};

export type RefreshTokensInput = {
  /** input for ID */
  id: Scalars['String']['input'];
  /** input for refresh token */
  refreshToken: Scalars['String']['input'];
};

export type ResponseDto = {
  __typename?: 'ResponseDTO';
  message: Scalars['String']['output'];
  status: Scalars['Float']['output'];
};

export type SigninInput = {
  /** input for password */
  password: Scalars['String']['input'];
  /** input for phone number */
  phone: Scalars['String']['input'];
};

export type SignupInput = {
  /** input for first name */
  firstName: Scalars['String']['input'];
  /** input for last name */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** input for password */
  password: Scalars['String']['input'];
  /** input for phone number */
  phone: Scalars['String']['input'];
  /** input for user name */
  username?: InputMaybe<Scalars['String']['input']>;
};

export type TokenDto = {
  __typename?: 'TokenDTO';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  AuthDTO: ResolverTypeWrapper<AuthDto>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  RefreshTokensInput: RefreshTokensInput;
  ResponseDTO: ResolverTypeWrapper<ResponseDto>;
  SigninInput: SigninInput;
  SignupInput: SignupInput;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  TokenDTO: ResolverTypeWrapper<TokenDto>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  AuthDTO: AuthDto;
  Boolean: Scalars['Boolean']['output'];
  Float: Scalars['Float']['output'];
  Mutation: {};
  Query: {};
  RefreshTokensInput: RefreshTokensInput;
  ResponseDTO: ResponseDto;
  SigninInput: SigninInput;
  SignupInput: SignupInput;
  String: Scalars['String']['output'];
  TokenDTO: TokenDto;
}>;

export type AuthDtoResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['AuthDTO'] = ResolversParentTypes['AuthDTO'],
> = ResolversObject<{
  accessToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  refreshToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation'],
> = ResolversObject<{
  logout?: Resolver<
    ResolversTypes['ResponseDTO'],
    ParentType,
    ContextType,
    RequireFields<MutationLogoutArgs, 'id'>
  >;
  refreshTokens?: Resolver<
    ResolversTypes['TokenDTO'],
    ParentType,
    ContextType,
    RequireFields<MutationRefreshTokensArgs, 'input'>
  >;
  signin?: Resolver<
    ResolversTypes['AuthDTO'],
    ParentType,
    ContextType,
    RequireFields<MutationSigninArgs, 'input'>
  >;
  signup?: Resolver<
    ResolversTypes['AuthDTO'],
    ParentType,
    ContextType,
    RequireFields<MutationSignupArgs, 'input'>
  >;
}>;

export type QueryResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = ResolversObject<{
  hello?: Resolver<ResolversTypes['AuthDTO'], ParentType, ContextType>;
}>;

export type ResponseDtoResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ResponseDTO'] = ResolversParentTypes['ResponseDTO'],
> = ResolversObject<{
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenDtoResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['TokenDTO'] = ResolversParentTypes['TokenDTO'],
> = ResolversObject<{
  accessToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  refreshToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  AuthDTO?: AuthDtoResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  ResponseDTO?: ResponseDtoResolvers<ContextType>;
  TokenDTO?: TokenDtoResolvers<ContextType>;
}>;
