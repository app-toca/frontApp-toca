import profile from "../../assets/avatardefault_92824.png";
import { BoxButtons, UploadContainer, UploadDiv } from "./style";
import Dropzone from "react-dropzone";
import { useState } from "react";
import { useEffect } from "react";

import { BsPlusCircleDotted } from "react-icons/bs";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import ImagePreview from "../ImagePreview";
import doUpload from "../../upload";

const BoxUpload = () => {
  const [fileOfInput, setFileOfInput] = useState([]);

  useEffect(() => {
    if (fileOfInput.length === 0) {
      //setMessageFeedbackUpload('Arraste a imagem até o campo acima ou clique no campo e selecione o arquivo')
    } else {
      //setMessageFeedbackUpload('Tudo ok, agora você pode finalizar o cadastro. Se deseja mudar a imagem, pode clicar no botão da lixeira')
    }
  }, [fileOfInput]);

  const onDropImage = (files) => {
    console.log(files);

    setFileOfInput(files);
  };

  return (
    <UploadDiv>
        {fileOfInput.length > 0 && <ImagePreview onClickFunction={() => setFileOfInput([])} image={fileOfInput}/>}
      { fileOfInput.length === 0 && <img src={profile} alt="profile"/>}
      <Dropzone
        accept={{
          "image/*": [".png", ".gif", ".jpeg", ".jpg"],
        }}
        maxFiles={1}
        multiple={false}
        onDropAccepted={onDropImage}
        onDropRejected={() => {}}
      >
        {({
          getRootProps,
          getInputProps,
          isDragActive,
          isDragReject,
          isDragAccept,
        }) => (
          <UploadContainer
            {...getRootProps()}
            isDragActive={isDragActive}
            isDragReject={isDragReject}
            isDragAccept={isDragAccept}
          >
            {fileOfInput.length === 0 && <div>
              <BsPlusCircleDotted />
            </div>}
            <input {...getInputProps()} />
          </UploadContainer>
        )}
      </Dropzone>
      {fileOfInput.length !== 0 && (
        <BoxButtons>
          <button onClick={async() => {

              const dataImage = new FormData();
                dataImage.append("image", fileOfInput[fileOfInput.length-1]);
                const logo = await doUpload(dataImage)

                console.log(logo)

                //dataUser.info.src = logo.url
            }} className="save">
            <AiOutlineCheck />
          </button>
          <button
            onClick={() => {
              setFileOfInput([])
            }}
            className="cancel"
          >
            <AiOutlineClose />
          </button>
        </BoxButtons>
      )}
    </UploadDiv>
  );
};

export default BoxUpload;
