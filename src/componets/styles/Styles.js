import styled from "styled-components";

export const Container = styled.div`
  height: 950px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  color: white;
  font-weight: 600;
`;

export const Section = styled.div`
  width: 500px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Search = styled.div`
  width: 300px;
  height: 100px;
  text-align: center;

  input {
    padding: 10px 40px;
    border-radius: 10px;
  }
`;

export const Info = styled.div`
  height: 300px;
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  gap: 10px 0px;
`;

export const Top = styled.div`
  height: 200px;
  width: 300px;
  padding-top: 80px;

  .location {
    font-size: 60px;
  }
  .temp {
    font-size: 26px;
  }
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0px 20px;
  padding-top: 160px;

  .feels {
    width: 110px;
    height: 60px;
    border: 2px solid white;
    border-radius: 15px;
  }
  .feels p {
    font-size: 22px;
  }
  .humidity {
    width: 110px;
    height: 60px;
    border: 2px solid white;
    border-radius: 15px;
  }

  .humidity p {
    font-size: 22px;
  }

  .wind {
    width: 110px;
    height: 60px;
    border: 2px solid white;
    border-radius: 15px;
  }
  .wind p {
    font-size: 22px;
  }
`;
