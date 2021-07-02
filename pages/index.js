import Head from "next/head";
import styled from "@emotion/styled";

export default function Home() {
  return (
    <>
      <Head>
        <title>HAGEN42 STUDIO</title>
        <meta
          name="description"
          content="This is Hagen42 and I made this page in 10 minutes."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Main>
        <Block>
          <p>H</p>
        </Block>
        <Block>
          <p>A</p>
        </Block>
        <Block>
          <p>G</p>
        </Block>
        <Block>
          <p>E</p>
        </Block>
        <Block>
          <p>N</p>
        </Block>
        <Block>
          <p>4</p>
        </Block>
        <Block>
          <p>2</p>
        </Block>
        <Copy>
          <p>
            <span>Hejsa,</span>
            Thank you for visiting us on the interwebs. We are currently busy
            developing our web experince so please check back in a few weeks.
          </p>
          <p>
            Feel free to reach out to us meanwhile at{" "}
            <a href="mailto:hejsa@hagen.studio">hejsa@hagen.studio</a> if you
            have any questions or a project in mind.
          </p>
        </Copy>
      </Main>
    </>
  );
}

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: #bfff65;
`;

const Block = styled.div`
  background-color: #242424;
  font-family: "NHaasGrotesk";
  display: flex;
  justify-content: center;
  align-items: center;
  :nth-of-type(6) {
    grid-column-start: 1;
  }
  p {
    font-size: 288px;
    color: #ffff;
  }
`;

const Copy = styled.div`
  grid-row: 2 / 4;
  grid-column: 3 / 4;
  align-items: center;
  padding: 28px;
  font-size: 28px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  line-height: 114%;
  a {
    text-decoration: none;
    background-color: #242424;
    color: #bfff65;
    border-radius: 50px;
    padding-left: 14px;
    padding-right: 14px;
    padding-bottom: 2px;
    &:hover {
      background-color: white;
      color: #242424;
    }
  }
  span {
    display: block;
    margin-bottom: 14px;
  }
  p {
    margin-bottom: 28px;
  }
`;
