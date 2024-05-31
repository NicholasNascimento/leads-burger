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

  .ordersList {
    background-color: var(--white);
  }

  .orderCard {
    padding: 20px;
    background-color: var(--white);
    border-bottom: 1px solid var(--red);

    h2 {
      margin-bottom: 10px;
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        margin-bottom: 5px;
      }
    }

    strong {
      display: block;
      margin-top: 10px;
    }
  }
`
