const dbusername = "apikey-v2-zyhv5j7i61imeby1qya0ma2ejrc0fkf9n4e4bl3w5gn";//registration url
const dbpassword = "ec6094ae0714dc7a5ffc50a86924bef3";
const basicAuth = " Basic " + btoa(dbusername + ":" + dbpassword);
class UserService {
    /**
     * 
     * @param {String} email 
     * @param {String} password 
     * @returns 
     */
    static login(email, password) {

        const url = "https://fffdcced-9a09-44ae-aa2f-e27add7efeb7-bluemix.cloudantnosqldb.appdomain.cloud/bankingapp_user/_find";

        const requestData = {
            selector: {
                email: email,
                password: password
            },
            fields: ["name", "email"]
        };
        console.log(requestData);//for our verification


        return axios.post(url, requestData, {
            headers: { Authorization: basicAuth },
        });
    }

    static register(registerObj) {

        const url = "https://fffdcced-9a09-44ae-aa2f-e27add7efeb7-bluemix.cloudantnosqldb.appdomain.cloud/bankingapp_user";
        console.log(basicAuth);//for our verification


        return axios.post(url, registerObj, {
            headers: { Authorization: basicAuth },
        });
    }
}






















