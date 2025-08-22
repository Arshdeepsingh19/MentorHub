import AxiosInstances from ".";

const createService = async (data) => {
  return await AxiosInstances.post("v1/service", data);
};

const getAllServices = async () => {
  return await AxiosInstances.get("v1/service");
};

const editService = async (id, data) => {
  return await AxiosInstances.put("v1/service/" + id, data);
};

const getServiceById = async (id) => {
  return await AxiosInstances.get(`v1/service/${id}`);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAllServices, createService, editService, getServiceById };
