class UserService {
    
    //free recharge please contact deja

    static login(userName, password) {
        const selectedData = {
            selector: {
                username: userName,
                password: password
            },
            fields: ["_id", "name", "email"]
        };
        const dbUserName = "apikey-v2-kf8ex4frj52lu2wwin72qqktpi3occ9bfv4p80vbr99";
        const dbPassword = "68fc5b9dc8c58071087abaecc44a5f29";
        const basicAuth = 'Basic ' + btoa(dbUserName + ':' + dbPassword);
        let url = "https://2fbcb9ec-d57d-431a-8d72-186d88ddf478-bluemix.cloudantnosqldb.appdomain.cloud//rechargeapp_users/_find";
        return (axios.post(url, selectedData, { headers: { 'Authorization': basicAuth } }));
    }

    static register(formData) {

        const dbUserName = "apikey-v2-v1zh0zplguvn1ukyhpnqwpt7rhiuokz1bqggmlt9kw4";
        const dbPassword = "163671d490ddeef138fc61e470881715";
        const basicAuth = 'Basic ' + btoa(dbUserName + ':' + dbPassword);

        let url = "https://2fbcb9ec-d57d-431a-8d72-186d88ddf478-bluemix.cloudantnosqldb.appdomain.cloud//rechargeapp_users";
        return (axios.post(url, formData, { headers: { 'Authorization': basicAuth } }));
    }}