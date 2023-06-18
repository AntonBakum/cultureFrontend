export interface LoginModel {
  email: string;
  password: string;
}

export interface RegistrationModel {
  name: string;
  email: string;
  password: string;
}

export interface TokenModel {
  token: string;
  refreshToken: string;
  result: boolean;
  errors?: string[];
}

export interface DecodedTokenModel {
  Id: string;
  email: string;
  exp: number;
  iat: number;
  jti: string;
  nbf: number;
  sub: string;
}

export interface UserInfoModel {
  id: number,
  email: string,
  name: string,
  phone: string,
  userName: string,
}


export interface UserUpdateModel {
  id: number,
  email?: string,
  name?: string,
  phone?: string,
  nickname?: string,
}

