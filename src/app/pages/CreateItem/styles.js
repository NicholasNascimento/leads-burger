import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  position: relative;

  background-color: var(--yellow);

  .logout {
    height: fit-content;
    position: absolute;
    top: 22px;
    right: 64px;

    background-color: transparent;
    font-size: 52px;
    color: var(--red);
    border: none;
  }
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

  .form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px 0;

    input {
      height: 40px;
      padding: 0 8px;

      color: var(--text-secondary);
    }

    textarea {
      height: 80px;
      padding: 16px 8px;

      color: var(--text-secondary);
    }

    select {
      height: 40px;
      padding: 0 8px;

      color: var(--text-secondary);
    }

    div {
      display: flex;
      justify-content: space-between;
    }

    button {
      margin: 16px auto 0;
      width: 40%;
      padding: 12px 0;

      color: var(--text-primary);
      background-color: var(--yellow);
      border: 1px solid var(--yellow);
      border-radius: 4px;
    }

    .halfInput {
      width: 48%;
    }
  }
`
