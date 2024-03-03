export const LOGIN_REQUEST = "LOGIN_REQUEST"
export const LOGIN_REQUEST_SUCCESS = "LOGIN_REQUEST_SUCCESS"
export const LOGIN_REQUEST_FAILURE = "LOGIN_REQUEST_FAILURE"

export const LOG_OUT = " LOG_OUT"

// để lưu thông tin user
export interface AuthenticatedUser {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}

  interface LoginRequest {
    type: typeof LOGIN_REQUEST;
    payload : {
      email: string;
      password: string;
    }
  }

  interface LoginSuccess {
    type: typeof LOGIN_REQUEST_SUCCESS;
    payload: {
      token: string;
    }
  }

  interface LoginFailure{
    type : typeof LOGIN_REQUEST_FAILURE;
    payload: {
      error: string;
    }
  }

  interface LoginOut {
    type: typeof LOG_OUT
  }

  export interface AccountState {
    user: AuthenticatedUser | null;
    loading: boolean;
    error: string | null;
    token: string | null;
  }

  export type AccountActionTypes = | LoginRequest | LoginSuccess | LoginFailure | LoginOut
