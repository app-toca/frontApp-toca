import axios from "axios";

const doUpload = async (data, token) => {
  
    const uploadResponse = await axios.post(
      `https://app-toca.herokuapp.com/upload/image`,
      data,
      {
        headers: { "Access-Control-Allow-Origin": "*","Content-Type": "multipart/form-data", "Authorization": `Bearer ${token}` },
      }
    );

    return uploadResponse.data
  
  };
  
  export default doUpload




