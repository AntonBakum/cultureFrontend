export interface InitiativeModel {
  id: number;
  username?: string;
  title?: string;
  creationDate: string;
  numberOfSupporters?: number;
  description: string;
}

export interface TopInitiativeModel {
  id: number;
  username: string;
  title: string;
  creationDate: string;
  numberOfSupporters: number;
}

export interface SupportersModel {
  userId: number;
  numberOfSupporters: number;
}

export interface SupportersUpdatingModel {
  initiativeId: number;
  numberOfSupporters: number;
}

export interface InitiativeTransportationModel {
  username: string;
  title: string;
  creationDate: string;
  numberOfSupporters: number;
  description: string;
  userId: number;
}

export interface CreateInitiativeModel {
  username: string;
  title: string;
  description: string;
}

export interface UpdateInitiativeModel {
  id: number;
  title: string;
  description: string;
}

export interface InitiativeByIdModel {
  id: number;
  date: string;
  title: string;
  description: string;
}
