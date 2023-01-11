// reactstrap components
import { useMutation, useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { useState } from 'react';
import { Modal, ModalBody, ModalFooter } from 'reactstrap';
import styled from 'styled-components';
import useForm from '../lib/useForm';
import Form from './styles/Form';
import { useUser } from './User';

const ButtonStyles = styled.button`
  width: auto;
  background: white;
  color: #015268;
  border: thin solid #000000;
  font-size: 1.2em;
  font-weight: 600;
  padding: 0.5rem 1.2rem;
`;

const SmallerButtonStyles = styled.button`
  width: auto;
  background: white;
  color: #015268;
  border: thin solid #000000;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0.5rem 1.2rem;
`;

const MessageReceived = styled.p`
  background: #ffffff;
  color: #000000;
  border: thin solid #000000;
  border-radius: 10px;
  padding: 7px;
  width: 90%;
  float: left;
`;

const MessageSent = styled.p`
  background: #dfffe9;
  color: #000000;
  border: thin solid #000000;
  border-radius: 10px;
  padding: 7px;
  width: 90%;
  float: right;
`;

const MessageSentSpan = styled.p`
  width: 90%;
  float: right;
  text-align: right;
  padding-right: 7px;
`;
const MessageReceivedSpan = styled.p`
  width: 90%;
  float: left;
  padding-left: 7px;
`;

const CREATE_CHAT_MUTATION = gql`
  mutation CREATE_CHAT_MUTATION(
    $message: String!
    $id: ID!
    $pageTypeMod: String!
  ) {
    createChatter(message: $message, id: $id, pageTypeMod: $pageTypeMod) {
      id
    }
  }
`;

export const ALL_CHATS_QUERY = gql`
  query ALL_CHATS_QUERY($id: ID) {
    chats(
      where: { item: { id: { equals: $id } } }
      orderBy: [{ timeStamp: asc }]
    ) {
      message
      id
      timeStamp
      userFrom {
        id
      }
      item {
        id
      }
    }
  }
`;

export default function ModalFunction({ id, pageTypeMod }) {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    message: '',
  });

  const theUser = useUser();
  const theId = theUser?.id;

  const [createChatter, { loadingCreate, errorCreate, dataCreate }] =
    useMutation(CREATE_CHAT_MUTATION, {
      variables: {
        message: inputs.message,
        id,
        pageTypeMod,
      },
      refetchQueries: [{ query: ALL_CHATS_QUERY }, 'ALL_CHATS_QUERY'],
    });

  const { data, error, loading } = useQuery(ALL_CHATS_QUERY, {
    variables: {
      id,
    },
  });

  const [modalOpen, setModalOpen] = useState(false);

  if (loading) return <p>Loading messages...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <>
      {pageTypeMod === 'buyer' && (
        <ButtonStyles type="button" onClick={() => setModalOpen(!modalOpen)}>
          Contact Seller
        </ButtonStyles>
      )}
      {pageTypeMod === 'seller' && (
        <ButtonStyles type="button" onClick={() => setModalOpen(!modalOpen)}>
          Contact Buyer
        </ButtonStyles>
      )}

      <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
        <div className=" modal-header">
          <h5
            className=" modal-title"
            style={{ width: '90%', textAlign: 'center', fontSize: '1.3em' }}
          >
            Messages
          </h5>
          <SmallerButtonStyles
            aria-label="Close"
            className=" close"
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
          >
            <span aria-hidden>×</span>
          </SmallerButtonStyles>
        </div>
        <ModalBody>
          {data.chats.map((chat) => {
            const dateTime = new Date(chat.timeStamp);
            let dt = dateTime.toGMTString();
            dt = dt.replace('GMT', '');
            return (
              <div key={chat.id}>
                {chat.userFrom.id === theId && (
                  <>
                    <MessageSentSpan>{dt}</MessageSentSpan>
                    <MessageSent>{chat.message}</MessageSent>
                  </>
                )}
                {chat.userFrom.id !== theId && (
                  <>
                    <MessageReceivedSpan>{dt}</MessageReceivedSpan>
                    <MessageReceived>{chat.message}</MessageReceived>
                  </>
                )}
              </div>
            );
          })}
        </ModalBody>
        <ModalFooter>
          <Form
            style={{ width: '100%' }}
            onSubmit={async (e) => {
              e.preventDefault();
              const res = await createChatter();
              clearForm();
            }}
          >
            <textarea
              style={{ width: '100%', marginBottom: '7px' }}
              rows="3"
              required
              id="message"
              name="message"
              placeholder="Message"
              value={inputs.message}
              onChange={handleChange}
            />
            <SmallerButtonStyles type="submit">Send</SmallerButtonStyles>
          </Form>
        </ModalFooter>
      </Modal>
    </>
  );
}
