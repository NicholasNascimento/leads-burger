import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  display: flex;

  background-color: var(--yellow);
`

export const Content = styled.div`
  width: 40%;
  height: fit-content;
  min-height: 20vh;
  margin: 96px auto;
  padding: 12px;
  display: flex;
  flex-direction: column;
  position: relative;

  background-color: var(--red);
  border-radius: 16px;

  .backButton {
    position: absolute;
    top: 20px;
    left: 20px;

    background-color: transparent;
    color: var(--white);
    font-size: 28px;
    border: none;
  }

  h1 {
    display: flex;
    color: var(--yellow);
    justify-content: center;
    gap: 10px;
  }

  span {
    font-size: 42px;
  }

  .orderConfirmation {
    height: 88px;
    padding: 8px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;

    p {
      color: var(--white);
      font-size: 16px;
    }

    button {
      padding: 8px 32px;

      font-size: 16px;
      font-weight: 500;
      color: var(--red);
      border: 1px solid var(--red);
      border-radius: 4px;

      transition: all 0.3s;

      &:hover {
        border: 1px solid var(--white);
        background-color: var(--red);
        color: var(--white);
      }
    }
  }
`
