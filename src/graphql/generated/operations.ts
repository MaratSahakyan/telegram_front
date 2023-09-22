import * as Types from './schemas';

export type LogoutMutationVariables = Types.Exact<{
  id: Types.Scalars['String']['input'];
}>;

export type LogoutMutation = {
  __typename?: 'Mutation';
  logout: { __typename?: 'ResponseDTO'; status: number; message: string };
};

export type RefreshTokensMutationVariables = Types.Exact<{
  input: Types.RefreshTokensInput;
}>;

export type RefreshTokensMutation = {
  __typename?: 'Mutation';
  refreshTokens: {
    __typename?: 'TokenDTO';
    accessToken: string;
    refreshToken: string;
  };
};

export type SigninMutationVariables = Types.Exact<{
  input: Types.SigninInput;
}>;

export type SigninMutation = {
  __typename?: 'Mutation';
  signin: {
    __typename?: 'AuthDTO';
    firstName: string;
    lastName: string;
    username?: string | null;
    phone: string;
    accessToken: string;
    refreshToken: string;
  };
};

export type SignupMutationVariables = Types.Exact<{
  input: Types.SignupInput;
}>;

export type SignupMutation = {
  __typename?: 'Mutation';
  signup: {
    __typename?: 'AuthDTO';
    firstName: string;
    lastName: string;
    username?: string | null;
    phone: string;
  };
};
