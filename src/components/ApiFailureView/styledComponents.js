import styled from 'styled-components'

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin-top: 15px;
  font-family: 'Roboto';
`

export const FailureImage = styled.img`
  width: 300px;
`
export const FailureHeading = styled.h1`
  font-size: 22px;
  font-weight: 500;
  margin: 15px 0 10px 0;
  color: ${props => (props.light ? '#181818' : '#f8fafc')};
`
export const FailureDescription = styled.p`
  text-align: center;
  font-size: 18px;
  color: ${props => (props.light ? '#475569' : '#94a3b8')};
  margin-bottom: 24px;
`

export const RetryButton = styled.button`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 13px;
  font-weight: 500;
  padding: 10px 28px;
  margin-top: 10px;
  margin-bottom: 30px;
  border-width: 0;
  background-color: #4f46e5;
  border-radius: 3px;
  cursor: pointer;
`
