import styled from 'styled-components'

export const CellContainer = styled.div`
  background: ${props => (props.odd ? '#E2DADB' : '#DAE2DF')};
  text-align: center;
  border: ${props =>
    props.selected
      ? '3px solid #6D696A'
      : props.odd
      ? '3px solid #E2DADB'
      : '3px solid #DAE2DF'};
  padding: 3px 0;
  font-size: 12px;

  input {
    margin: -5px 0;
    font-size: 12px;
    border: none;
    outline: none;
    background: transparent;
    border-radius: 0;
    text-align: center;
    height: 100%;
    box-shadow: none !important;
  }
`

export const Buttons = styled.div`
  position: absolute;
  top: 3px;
  right: -10px;
  transform: scale(0.8);

  button {
    margin-right: 6px;
    :hover {
      border-color: #6d696a;
      color: #6d696a;
    }

    &.ant-btn-primary,
    &.ant-btn-primary:hover {
      background-color: #6d696a;
      border: none;
      outline: none;
      color: white;
    }
  }
`
