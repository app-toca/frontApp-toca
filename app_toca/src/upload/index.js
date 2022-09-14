import axios from "axios";


const doUpload = async (data) => {

  const login = {
    "email": "anavitoriacisn314@testing",
    "password": "senhaFortíssima2444"
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
        //...getProgress,
      }
    );
    return uploadResponse.data
  
  };
  
  export default doUpload

  /*const getProgress = {
    onDownloadProgress: (progressEvent) => {
      setIsLoading(true)
        let number = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        )

        if(number<100) {
          setPercentage(number)
        } else {
          setIsLoading(false)
          setPercentage(0)
        }
        
     },
    onUploadProgress: (progressEvent) => {
      
        let number = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        )

        if(number<100) {
            setIsLoading(true)
            setPercentage(number)
        } else {
          setIsLoading(false)
          setPercentage(0)
        }
        
     }*/



