import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  margin-top: 60px;
  background-color: var(--white-color);
  border-radius: 5px;
  border: 1px solid var(--border-color);
  width: 82vw;

  @media (max-width: 1805px) {
    width: 80vw;
  }

  @media (max-width: 1625px) {
    width: 78vw;
  }

  @media (max-width: 1470px) {
    width: 76vw;
  }

  @media (max-width: 1335px) {
    width: 72vw;
  }

  @media (max-width: 1158px) {
    width: 68vw;
  }

  @media (max-width: 1021px) {
    width: 88vw;
  }

  @media (max-width: 762px) {
    width: 84vw;
  }

   @media (max-width: 567px) {
    width: 80vw;
  }

   @media (max-width: 472px) {
    width: 76vw;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;

  label {
    margin-right: 10px;
    margin-bottom: 10px;
    font-weight: bold;
    color: var(--primary-text-color);
    font-weight: 800;
  }

  input {
    flex: 1;
    padding: 11px 40px 11px 35px;
    border: 1px solid var(--secondary-color);
    border-radius: 4px;
    margin-right: 10px;
    font-size: 16px;
    outline: none;
    width: 500px;
    position: relative;
    background-color: var(--white-color);
    color: var(--black-color);
    transition: border-color 0.3s, box-shadow 0.3s;
  }

  input:focus {
    box-shadow: 0 0 0 3px rgba(0, 0, 255, 0.2);
  }

  svg {
    position: absolute;
    left: 10px;
    top: 155px; 
    cursor: pointer;
    color: var(--primary-text-color);
  }

  @media (max-width: 688px) {
    input {
      width: 300px;
    }
  }

  @media (max-width: 472px) {
    input {
      width: 200px;
    }
  }
`;

export const RadioWrapper = styled.div`
  margin-bottom: 20px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  label {
    font-weight: 500;
    color: var(--primary-text-color);
  }

  div {
    margin-top: 10px;
    display: flex;
    align-items: center;
  }

  input[type='radio'] {
    display: none;
  }

  input[type='radio'] + label {
    position: relative;
    padding-left: 30px;
    margin-right: 20px;
    cursor: pointer;
    line-height: 30px;
    font-size: 16px;
    color: var(--primary-text-color);
  }

  input[type='radio'] + label:before {
    content: '';
    position: absolute;
    left: 2px;
    top: 3px;
    width: 18px;
    height: 18px;
    border: 2px solid var(--secondary-color); 
    border-radius: 50%;
    background: white;
    transition: border-color 0.3s;
  }

  input[type='radio']:focus + label:before,
  input[type='radio']:checked + label:before {
    border-color: var(--link-color);
  }

  input[type='radio']:checked + label:before {
    background-color: var(--link-color);
  }

  input[type='radio'] + label:after {
    content: '';
    position: absolute;
    left: 8px;
    top: 9px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: white;
    transition: background 0.3s;
  }
`;

export const Results = styled.div`
  h2 {
    margin-bottom: 10px;
    color: var(--primary-text-color);
    font-size: 18px;
  }

  p {
    color: #666;
  }
`;
