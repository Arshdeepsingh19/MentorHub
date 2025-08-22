import AxiosInstances from ".";

// Define the functions
const getAllMentors = () => {
  return AxiosInstances.get("v1/mentor");
};

const getMentorByUsername = (userName) => {
  return AxiosInstances.get("v1/mentor/" + userName);
};

// Assign the object to a variable
const mentorAPI = {
  getAllMentors,
  getMentorByUsername,
};

// Export the variable as default
export default mentorAPI;
