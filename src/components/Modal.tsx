import { useContext } from "react";
import { ModalContext } from "contexts/ModalContext";
import styled from "styled-components";
import { MdClose } from "react-icons/md";

const StyledModalContainer = styled.section`
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const StyledModal = styled.section`
  background-color: white;
  border-radius: 0.7rem;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 35%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 1.1rem;
  }
  div {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
`;

const StyledCloseIcon = styled(MdClose)`
  width: 1.5rem;
  height: 1.5rem;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: 0.3s;
  }
`;

const StyledModalContent = styled.article`
  margin-top: 3em;
`;

const StyledButtons = styled.div`
  button {
    padding: 0.6em 1.2em;
    margin: 2.5em auto 0;
    background-color: #a0c7de;
    border-radius: 0.5em;
    font-weight: 600;
  }
  button: hover {
    background-color: black;
    color: #a0c7de;
    transition: 0.3s;
  }
`;

interface Props {
  handleDeleteMemo: (id: string) => void;
}

const Modal = ({ handleDeleteMemo }: Props) => {
  const { setOpenModal, confirmDelete } = useContext(ModalContext);
  return (
    <StyledModalContainer>
      <StyledModal>
        <div>
          <StyledCloseIcon onClick={() => setOpenModal(false)} />
        </div>
        <StyledModalContent>
          <p>Do you really want to delete it?</p>
          <StyledButtons>
            <button
              onClick={() => {
                handleDeleteMemo(confirmDelete);
                setOpenModal(false);
              }}
            >
              YES
            </button>
            <button onClick={() => setOpenModal(false)}>NO</button>
          </StyledButtons>
        </StyledModalContent>
      </StyledModal>
    </StyledModalContainer>
  );
};

export default Modal;
