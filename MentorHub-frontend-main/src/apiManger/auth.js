import AxiosInstances from ".";

const signup = (data) => {
  return AxiosInstances.post("v1/auth/signup", data);
};

const signin = (data) => {
  return AxiosInstances.post("v1/auth/signin", data);
};

export default { signup, signin };
