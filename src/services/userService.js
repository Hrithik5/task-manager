import { httpAxios } from "@/helper/httpHelper";

export async function signUp(userData){
  const result = await httpAxios.post("/api/users", userData).then((res) => res.data);
  return result;
}

export async function login(loginData){
  const result = await httpAxios.post("/api/login", loginData).then((res) => res.data);
  return result;
}

export async function currentUser(){
  const result = await httpAxios.get("/api/current").then((res) => res.data);
  return result;

}
export async function logout(){
  const result = await httpAxios.post("/api/logout").then((res) => res.data);
  return result;
}