export interface ILoginData{
  user:string,
  token:string
}

export const initialState:ILoginData={
  user:'',
  token:''
};
