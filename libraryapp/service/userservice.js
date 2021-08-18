class UserService {
    static login(userName, password) {
        const selectedData = {
            selector: {
                username: userName,
                password: password
            },
            fields: ["_id", "name", "email"]
        };
        const dbUserName = "apikey-v2-380rhhqzbqk6eifbn30gvuevzk9903pdrrsd7f8ipknj";
        const dbPassword = "ee0e39016c30dc0fc4fd04d12a420174";
        const basicAuth = 'Basic ' + btoa(dbUserName + ':' + dbPassword);
        let url = "https://5804af1c-53d6-4cc1-b0eb-5219a1cc5775-bluemix.cloudantnosqldb.appdomain.cloud/libraryapp_users/_find";
        return (axios.post(url, selectedData, { headers: { 'Authorization': basicAuth } }));
    }

    static register(formData) {

        const dbUserName = "apikey-v2-380rhhqzbqk6eifbn30gvuevzk9903pdrrsd7f8ipknj";
        const dbPassword = "ee0e39016c30dc0fc4fd04d12a420174";
        const basicAuth = 'Basic ' + btoa(dbUserName + ':' + dbPassword);

        let url = "https://5804af1c-53d6-4cc1-b0eb-5219a1cc5775-bluemix.cloudantnosqldb.appdomain.cloud/libraryapp_users";
        return (axios.post(url, formData, { headers: { 'Authorization': basicAuth } }));
    }
}
