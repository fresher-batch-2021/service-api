const dbUserName = "apikey-v2-a160c2y9h57djbakjap0yesqvh8yvuecd47paczd8l9";
const dbPassword = "532b6c43f03b7016261e7a66b65a2648";
// one space after Basic
const basicAuth = "Basic " + btoa(dbUserName + ":" + dbPassword);
class UserService {
  static login(email, password) {
    const url =
      "https://69ba05e4-6d14-4d5f-8640-ee67170e853f-bluemix.cloudantnosqldb.appdomain.cloud/jobportal/_find"; //registration url

    const requestData = {
      selector: {
        email: email,
        password: password,
      },
      fields: ["id", "rev", "name", "email", "role"],
    };
    console.log(requestData); //for our verification

    return axios.post(url, requestData, {
      headers: { Authorization: basicAuth },
    });
  }

  static register(registerObj) {

    const url =
      "https://69ba05e4-6d14-4d5f-8640-ee67170e853f-bluemix.cloudantnosqldb.appdomain.cloud/jobportal";
    console.log(basicAuth);
    return axios.post(url, registerObj, {
      headers: { Authorization: basicAuth }
    });
  }
}
