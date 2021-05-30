import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border-radius: 1rem;
  box-shadow: 2px 2px 2px grey;
  transition: all 350ms ease-in;

  &:hover {
    transform: scale(1.025);
    box-shadow: 2px 2px 5px grey;
  }

  &:hover button {
    background-color: green;
    color: white;
  }
`;
const CardBody = styled.div``;
const CardImage = styled.img`
  width: 100%;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;

  height: auto;
  object-fit: cover;
`;
const CardInfo = styled.div`
  padding: 0.5rem;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h4`
  margin: 0.5rem 0;
  font-size: large;
`;

const CardButton = styled.button`
  padding: 0.5rem;
  border: 2px solid green;
  background: transparent;
  border-radius: 0.5rem;
  font-size: 1rem;
  color: green;
`;

const Modal = styled.div`
  position: absolute;
  width: 16rem;
  flex-direction: column;
  background-color: #f0f0f0;
  padding: 2rem;
  z-index: 2;
  border-radius: 10px;
  top: 0;
  height: 22rem;
  overflow-y: scroll;
`;
const RecipeCard = ({ title, src, ingredients }) => {
  const [modal, setModal] = React.useState(false);

  return (
    <>
      <div
        style={{
          position: "relative",
        }}
      >
        <Card>
          <CardBody>
            <CardImage src={src} />
            <CardInfo>
              <CardTitle>{title}</CardTitle>
              <CardButton onClick={() => setModal(!modal)}>
                View Recipe
              </CardButton>
            </CardInfo>
          </CardBody>
        </Card>

        <Modal className={modal ? "show" : "hide"}>
          <span
            onClick={() => setModal(false)}
            style={{ marginLeft: "auto", fontSize: "4rem", cursor: "pointer" }}
          >
            &#9746;
          </span>
          <h1>Ingredients</h1>
          <ul>
            {ingredients.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </Modal>
      </div>
    </>
  );
};

export default RecipeCard;
