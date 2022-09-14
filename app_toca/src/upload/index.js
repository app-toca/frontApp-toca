import axios from "axios";


const doUpload = async (data) => {

  const login = {
    "email": "anavitoriacisn314@gmail.com",
    "password": "toca1234"
  }

  const testLogin = await axios.post(
    `https://app-toca.herokuapp.com/login`,
    login,
    {
      headers: { "Content-Type": "application/json" },
    })

    console.log(testLogin.data.token)

  
    const uploadResponse = await axios.post(
      `https://app-toca.herokuapp.com/upload/image`,
      data,
      {
        headers: { "Access-Control-Allow-Origin": "*","Content-Type": "multipart/form-data", "Authorization": `Bearer ${testLogin.data.token}` },
      }
    );
    return uploadResponse.data
  
  };
  
  export default doUpload




