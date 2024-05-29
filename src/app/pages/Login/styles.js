import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100vh;
  padding: 15vh 0;
  justify-content: center;
  background-color: var(--yellow);

  h1 {
    display: flex;
    color: var(--red);
    justify-content: center;
    gap: 10px;
  }

  span {
    font-size: 42px;
  }
`

export const Content = styled.div`
  height: ${(props) => (props.active ? '47vh' : '45vh')};
  width: 40vw;
  padding: 80px 48px;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 16px;

  background-color: var(--red);
  border-radius: 20px;

  div {
    display: flex;
    position: relative;
  }

  div + div {
    margin-top: 16px;
  }

  .buttonBox {
    width: 100%;
    padding: 12px 16px;
    margin-top: 32px;

    background-color: var(--yellow);
    border-radius: 4px;
  }

  input {
    height: 48px;
    width: 100%;
    padding: 0 24px;

    border: 1px solid var(--text-primary);
    border-radius: 4px;
  }

  .error {
    position: absolute;
    bottom: -20px;

    color: var(--text-primary);
    font-size: 14px;
  }

  .submitButton {
    height: 48px;
    width: 100%;

    background-color: var(--red);
    color: var(--white);
    font-size: 14px;
    border: none;
    border-radius: 4px;
    transition: all 0.3s;

    &:hover {
      opacity: 0.9;
    }
  }

  .registerButton {
    width: fit-content;
    margin: 0 auto;

    background-color: transparent;
    color: var(--white);
    font-size: 14px;
    border: none;

    transition: all 0.2s;

    &:hover {
      border-bottom: 1px solid var(--white);
    }
  }

  .or {
    text-align: center;
    font-size: 14px;
    color: var(--white);
  }
`
