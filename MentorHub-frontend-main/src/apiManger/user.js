import AxiosInstances from ".";

const uploadImage = async (formData) => {
  return await AxiosInstances.post("v1/user/upload-photo", formData);
};

const getUser = async () => {
  return await AxiosInstances.get("v1/user");
};

const updateUser = async (data) => {
  return await AxiosInstances.put("v1/user/update-profile", data);
};
const userAPI = { uploadImage, getUser, updateUser };

export default userAPI;
