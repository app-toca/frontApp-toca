import axios from "axios";


const doUpload = async (data) => {

    //data.append("api_key", api_key);
    //data.append("upload_preset", "kbreyloh");

    console.log(data)
  
    const uploadResponse = await axios.post(
      `https://app-toca.herokuapp.com/upload/image`,
      data,
      {
        headers: { "Access-Control-Allow-Origin": "*","Content-Type": "multipart/form-data" },
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



