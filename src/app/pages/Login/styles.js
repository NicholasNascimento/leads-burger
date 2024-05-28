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
  height: 40vh;
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
    width: 87%;
    padding: 12px 16px;
    margin-top: 32px;
    position: absolute;
    bottom: 32px;

    background-color: var(--yellow);
    border-radius: 4px;
  }

  input {
    height: 48px;
    padding: 0 24px;

    border: 1px solid var(--text-primary);
    border-radius: 4px;
  }

  button {
    height: 48px;
    width: 100%;

    background-color: var(--red);
    border: none;
    border-radius: 4px;
    transition: all 0.3s;

    &:hover {
      opacity: 0.9;
    }
  }
`
