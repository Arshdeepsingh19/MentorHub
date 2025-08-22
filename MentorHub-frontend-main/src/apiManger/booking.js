import AxiosInstances from ".";

const bookService = async (data) => {
  return await AxiosInstances.post("v1/booking/initiate-booking", data);
};
const getMentorBookings = async () => {
  return await AxiosInstances.get("v1/booking/mentor");
};
const getStudentBookigs = async () => {
  return await AxiosInstances.get("v1/booking/");
};

const booking = {
  bookService,
  getMentorBookings,
  getStudentBookigs,
};

export default booking;
