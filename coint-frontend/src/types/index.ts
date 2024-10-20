
export interface IAdmin {
    id: number;
    username: string;
    email: string;
    password: string;
    is_active: boolean
}

export interface IStore {
    admin: IAdmin
  }
  