import { BoxButtons, Profile, UploadContainer, UploadDiv } from "./style";
import Dropzone from "react-dropzone";
import { useState } from "react";
import { useEffect } from "react";
import { RiAccountCircleFill } from "react-icons/ri";
import { BsPlusCircleDotted } from "react-icons/bs";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import ImagePreview from "../ImagePreview";
import doUpload from "../../upload";
import { useContext } from "react";
import { CreateSessionContext } from "../../providers/CreateSession";

const BoxUpload = ({ url }) => {
  const [fileOfInput, setFileOfInput] = useState([]);
  const [profileImage, setProfileImage] = useState(url);
  const { userToken } = useContext(CreateSessionContext);

  const onDropImage = (files) => {
    setFileOfInput(files);
  };

  return (
    <UploadDiv>
      {fileOfInput.length > 0 && (
        <ImagePreview
          onClickFunction={() => setFileOfInput([])}
          image={fileOfInput}
        />
      )}
      {fileOfInput.length === 0 &&
        (profileImage !== "" ? (
          <img src={profileImage} alt="profile" />
        ) : (
          <Profile>
            <RiAccountCircleFill />
          </Profile>
        ))}
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
            {fileOfInput.length === 0 && (
              <div>
                <BsPlusCircleDotted />
              </div>
            )}
            <input {...getInputProps()} />
          </UploadContainer>
        )}
      </Dropzone>
      {fileOfInput.length !== 0 && (
        <BoxButtons>
          <button
            onClick={async () => {
              const dataImage = new FormData();
              dataImage.append("image", fileOfInput[fileOfInput.length - 1]);
              const logo = await doUpload(dataImage, userToken);
              setProfileImage(logo.url);
              setFileOfInput([]);
            }}
            className="save"
          >
            <AiOutlineCheck />
          </button>
          <button
            onClick={() => {
              setFileOfInput([]);
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
