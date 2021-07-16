import React from "react";
import { Modal, TextContainer } from "@shopify/polaris";

const ErrorModal = ({ message, closeHandler }) => (
  <div>
    <Modal title="Error" onClose={closeHandler} open>
      <Modal.Section>
        <TextContainer>
          <p>{message}</p>
        </TextContainer>
      </Modal.Section>
    </Modal>
  </div>
);

export default ErrorModal;
