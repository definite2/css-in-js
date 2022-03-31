import React from 'react';
import styled from 'styled-components';
import { Slide, Text, Notes, Image, Appear, Heading } from 'spectacle';
import cost from '../assets/cost.gif';
import Container from '../layouts/Container';

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Slide10b = () => {
  return (
    <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
      <Container>
        <Heading fontSize={50} margin="0px 0 100px" color="secondary">
          Runtime Cost
        </Heading>
        <Row>
          <Image src={cost} height={400} />
          <Column>
            <Appear>
              <Text margin="0 0 0 24px">
                Because... styles are double-parsed
              </Text>
            </Appear>
            <Appear>
              <Text margin="24px 0 0 24px">
                ...But there are solutions:
                <p style={{ fontSize: 25 }}>Linaria</p>
                <p style={{ fontSize: 25 }}> Astroturf</p>
                <p style={{ fontSize: 25 }}>Reshadow</p>
              </Text>
            </Appear>
          </Column>
        </Row>
      </Container>
      <Notes>
        Geleneksel olarak, bir web sayfasını yüklediğimizde, bir tarayıcı sadece
        CSS'yi okur ve onu uygular. CSS-in-JS kullanırken, tarayıcı dinamik
        olarak bir CSS style tagi oluşturur, ardından bunu okur ve web sayfasına
        uygular. Bu da performance time'ı etkileyen bir durum.Bu aslında bir
        benchmark, bir 3rd party css-in-js kütüphanesi seçerken, mesela buna
        bakılabilir. Mesela bu runtime difference amount of optimization'a,
        dynamic styles implementation detayına, kütüphanede kullanlan hashing
        algorithmasına ve framework'le olan integration cost'una bağlıdır.
        Aslında son zamanlar zero runtime css-in-js diye birşey çıktı
      </Notes>
    </Slide>
  );
};

export default Slide10b;
