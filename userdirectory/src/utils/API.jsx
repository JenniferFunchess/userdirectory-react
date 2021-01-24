import axios from "axios";

export default {
  ApiSearch: function () {
    return axios.get(
      "https://randomuser.me/api?nat=us&inc=id,name,phone,dob,picture,email&results=10"
    );
  },
};
