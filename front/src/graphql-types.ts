import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type ChattingMessage = {
  __typename?: 'ChattingMessage';
  id: Scalars['Int'];
  chattingRoomId: Scalars['String'];
  read: Array<User>;
  text: Scalars['String'];
  attachment: Scalars['String'];
  createdAt: Scalars['DateTime'];
};

export type ChattingRoom = {
  __typename?: 'ChattingRoom';
  id: Scalars['String'];
  participants: Array<Scalars['String']>;
  createdAt: Scalars['DateTime'];
};

export type Count = {
  __typename?: 'Count';
  count: Scalars['Int'];
};

export type CreateChattingInputOptions = {
  participants: Array<Scalars['String']>;
};

export type CreateChattingMessageInputOptions = {
  chattingRoomId: Scalars['String'];
  text?: Maybe<Scalars['String']>;
  attachment?: Maybe<Scalars['String']>;
};


export type GoogleSignInOptions = {
  email: Scalars['String'];
  uid: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  accessToken?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createChattingRoom: ChattingRoom;
  createChattingMessage: ChattingMessage;
  pubSubMutation: Scalars['Boolean'];
  publisherMutation: Scalars['Boolean'];
  pubSubMutationToDynamicTopic: Scalars['Boolean'];
  createUser: User;
  updateUser: Count;
  deleteUsers: Count;
  signIn: User;
  logout: User;
  resetPassword: User;
  googleSignIn: User;
};


export type MutationCreateChattingRoomArgs = {
  input: CreateChattingInputOptions;
};


export type MutationCreateChattingMessageArgs = {
  input: CreateChattingMessageInputOptions;
};


export type MutationPubSubMutationArgs = {
  message?: Maybe<Scalars['String']>;
};


export type MutationPublisherMutationArgs = {
  message?: Maybe<Scalars['String']>;
};


export type MutationPubSubMutationToDynamicTopicArgs = {
  message?: Maybe<Scalars['String']>;
  topic: Scalars['String'];
};


export type MutationCreateUserArgs = {
  input: UserInput;
};


export type MutationUpdateUserArgs = {
  options: UpdateUserOptions;
};


export type MutationDeleteUsersArgs = {
  ids: Array<Scalars['String']>;
};


export type MutationSignInArgs = {
  options: SingInUserOptions;
};


export type MutationResetPasswordArgs = {
  email: Scalars['String'];
};


export type MutationGoogleSignInArgs = {
  options: GoogleSignInOptions;
};

export type Notification = {
  __typename?: 'Notification';
  id: Scalars['ID'];
  message?: Maybe<Scalars['String']>;
  date: Scalars['DateTime'];
};

export type Query = {
  __typename?: 'Query';
  getChattingRoom: ChattingRoom;
  getChattingMessages: Array<ChattingMessage>;
  currentDate: Scalars['DateTime'];
  userList: Array<User>;
  userDetail?: Maybe<User>;
  userCount: Count;
  findUserByAllKeyword: Array<User>;
  findByAccountIdKeyword: Array<User>;
  findUserByFullnameKeyword: Array<User>;
  findByEmail: User;
};


export type QueryGetChattingRoomArgs = {
  input: ReadChattingInputOptions;
};


export type QueryGetChattingMessagesArgs = {
  input: ReadChattingInputOptions;
};


export type QueryUserListArgs = {
  options: UserListingOptions;
};


export type QueryUserDetailArgs = {
  options: UserDetailOptions;
};


export type QueryFindUserByAllKeywordArgs = {
  options: SearchOptions;
};


export type QueryFindByAccountIdKeywordArgs = {
  accountId: Scalars['String'];
};


export type QueryFindUserByFullnameKeywordArgs = {
  keyword: Scalars['String'];
};


export type QueryFindByEmailArgs = {
  email: Scalars['String'];
};

export type ReadChattingInputOptions = {
  chattingRoomId: Scalars['String'];
};

export type SearchOptions = {
  keyword: Scalars['String'];
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type SingInUserOptions = {
  accountId?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  oAuthToken?: Maybe<Scalars['String']>;
  invitedToken?: Maybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  propagateChattingMessage: ChattingMessage;
  propagateChattingMessageRead: ChattingMessage;
  normalSubscription: Notification;
  subscriptionWithFilter: Notification;
  subscriptionWithFilterToDynamicTopic: Notification;
};


export type SubscriptionSubscriptionWithFilterToDynamicTopicArgs = {
  topic: Scalars['String'];
};

export type UpdateUserOptions = {
  id: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  onboarding?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  /** User account unique */
  accountId: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  oauthToken?: Maybe<Scalars['String']>;
  /** Provide like google or facebook */
  oauthProvider?: Maybe<Scalars['String']>;
  /** Token for authentication */
  token?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  onboarding?: Maybe<Scalars['String']>;
  userStatus?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type UserDetailOptions = {
  id?: Maybe<Scalars['String']>;
};

export type UserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  oauthToken?: Maybe<Scalars['String']>;
  oauthProvider?: Maybe<Scalars['String']>;
  onboarding?: Maybe<Scalars['String']>;
  userStatus?: Maybe<UserStatus>;
};

export type UserListingOptions = {
  adminId: Scalars['String'];
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Scalars['String']>;
};

export enum UserStatus {
  Visitor = 'visitor',
  Alive = 'alive',
  Inactive = 'inactive',
  Paused = 'paused',
  Blocked = 'blocked',
  Deleted = 'deleted'
}



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

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
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  ChattingMessage: ResolverTypeWrapper<ChattingMessage>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  ChattingRoom: ResolverTypeWrapper<ChattingRoom>;
  Count: ResolverTypeWrapper<Count>;
  CreateChattingInputOptions: CreateChattingInputOptions;
  CreateChattingMessageInputOptions: CreateChattingMessageInputOptions;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  GoogleSignInOptions: GoogleSignInOptions;
  Mutation: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Notification: ResolverTypeWrapper<Notification>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Query: ResolverTypeWrapper<{}>;
  ReadChattingInputOptions: ReadChattingInputOptions;
  SearchOptions: SearchOptions;
  SingInUserOptions: SingInUserOptions;
  Subscription: ResolverTypeWrapper<{}>;
  UpdateUserOptions: UpdateUserOptions;
  User: ResolverTypeWrapper<User>;
  UserDetailOptions: UserDetailOptions;
  UserInput: UserInput;
  UserListingOptions: UserListingOptions;
  UserStatus: UserStatus;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  ChattingMessage: ChattingMessage;
  Int: Scalars['Int'];
  String: Scalars['String'];
  ChattingRoom: ChattingRoom;
  Count: Count;
  CreateChattingInputOptions: CreateChattingInputOptions;
  CreateChattingMessageInputOptions: CreateChattingMessageInputOptions;
  DateTime: Scalars['DateTime'];
  GoogleSignInOptions: GoogleSignInOptions;
  Mutation: {};
  Boolean: Scalars['Boolean'];
  Notification: Notification;
  ID: Scalars['ID'];
  Query: {};
  ReadChattingInputOptions: ReadChattingInputOptions;
  SearchOptions: SearchOptions;
  SingInUserOptions: SingInUserOptions;
  Subscription: {};
  UpdateUserOptions: UpdateUserOptions;
  User: User;
  UserDetailOptions: UserDetailOptions;
  UserInput: UserInput;
  UserListingOptions: UserListingOptions;
};

export type ChattingMessageResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChattingMessage'] = ResolversParentTypes['ChattingMessage']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  chattingRoomId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  read?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  attachment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ChattingRoomResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChattingRoom'] = ResolversParentTypes['ChattingRoom']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  participants?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type CountResolvers<ContextType = any, ParentType extends ResolversParentTypes['Count'] = ResolversParentTypes['Count']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createChattingRoom?: Resolver<ResolversTypes['ChattingRoom'], ParentType, ContextType, RequireFields<MutationCreateChattingRoomArgs, 'input'>>;
  createChattingMessage?: Resolver<ResolversTypes['ChattingMessage'], ParentType, ContextType, RequireFields<MutationCreateChattingMessageArgs, 'input'>>;
  pubSubMutation?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationPubSubMutationArgs, never>>;
  publisherMutation?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationPublisherMutationArgs, never>>;
  pubSubMutationToDynamicTopic?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationPubSubMutationToDynamicTopicArgs, 'topic'>>;
  createUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'input'>>;
  updateUser?: Resolver<ResolversTypes['Count'], ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'options'>>;
  deleteUsers?: Resolver<ResolversTypes['Count'], ParentType, ContextType, RequireFields<MutationDeleteUsersArgs, 'ids'>>;
  signIn?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationSignInArgs, 'options'>>;
  logout?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  resetPassword?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationResetPasswordArgs, 'email'>>;
  googleSignIn?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationGoogleSignInArgs, 'options'>>;
};

export type NotificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Notification'] = ResolversParentTypes['Notification']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  date?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getChattingRoom?: Resolver<ResolversTypes['ChattingRoom'], ParentType, ContextType, RequireFields<QueryGetChattingRoomArgs, 'input'>>;
  getChattingMessages?: Resolver<Array<ResolversTypes['ChattingMessage']>, ParentType, ContextType, RequireFields<QueryGetChattingMessagesArgs, 'input'>>;
  currentDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  userList?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserListArgs, 'options'>>;
  userDetail?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserDetailArgs, 'options'>>;
  userCount?: Resolver<ResolversTypes['Count'], ParentType, ContextType>;
  findUserByAllKeyword?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryFindUserByAllKeywordArgs, 'options'>>;
  findByAccountIdKeyword?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryFindByAccountIdKeywordArgs, 'accountId'>>;
  findUserByFullnameKeyword?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryFindUserByFullnameKeywordArgs, 'keyword'>>;
  findByEmail?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QueryFindByEmailArgs, 'email'>>;
};

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  propagateChattingMessage?: SubscriptionResolver<ResolversTypes['ChattingMessage'], "propagateChattingMessage", ParentType, ContextType>;
  propagateChattingMessageRead?: SubscriptionResolver<ResolversTypes['ChattingMessage'], "propagateChattingMessageRead", ParentType, ContextType>;
  normalSubscription?: SubscriptionResolver<ResolversTypes['Notification'], "normalSubscription", ParentType, ContextType>;
  subscriptionWithFilter?: SubscriptionResolver<ResolversTypes['Notification'], "subscriptionWithFilter", ParentType, ContextType>;
  subscriptionWithFilterToDynamicTopic?: SubscriptionResolver<ResolversTypes['Notification'], "subscriptionWithFilterToDynamicTopic", ParentType, ContextType, RequireFields<SubscriptionSubscriptionWithFilterToDynamicTopicArgs, 'topic'>>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  accountId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  oauthToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  oauthProvider?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  onboarding?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Resolvers<ContextType = any> = {
  ChattingMessage?: ChattingMessageResolvers<ContextType>;
  ChattingRoom?: ChattingRoomResolvers<ContextType>;
  Count?: CountResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Notification?: NotificationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
