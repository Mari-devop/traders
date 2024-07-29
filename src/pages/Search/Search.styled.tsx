import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  margin-top: 70px;
  background-color: var(--white-color);
  border-radius: 5px;
  border: 1px solid var(--border-color);
  width: 1070px;
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
    outline: none;
    font-size: 16px;
    width: 500px;
    position: relative;

  
  }

  svg {
    position: absolute;
    left: 10px;
    top: 155px; 
    cursor: pointer;
    color: var(--primary-text-color);
  }
`;

export const RadioWrapper = styled.div`
  margin-bottom: 20px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  label {
    font-weight: 800;
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
    border: 2px solid var(--link-color);
    border-radius: 50%;
    background: white;
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
    font-size: 20px;
  }

  p {
    color: #666;
  }
`;
