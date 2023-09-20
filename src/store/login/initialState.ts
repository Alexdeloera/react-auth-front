export interface ILoginData{
  user:string,
  email:string,
  id:string
}

export const initialState:ILoginData={
  user:'',
  email:'',
  id:''
};
