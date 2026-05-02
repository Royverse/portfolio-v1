import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 120vh;
  width: 100%;
  position: relative;
  overflow: hidden;
 
  background-color: rgb(207 215 255);
  box-shadow: 0 0 100px 50px rgb(207 215 255);
  border-radius: 20px;
  
`;

const SkillsTitle = styled.div`
  transition: transform 0.5s ease-out;
  font-family: 'AvenirHeavy';
  position: absolute;
  color: #eee;
  top: 40%;
  right: -50%;
`;

const SkillsList = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  font-family: 'AvenirRoman';
  text-align: left;
  margin-left: 15%;
  margin-right: 10%;
  z-index: 1;
  transform: translateY(30%);
`;

const CertificateGallery = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 100px;
  width: 100%;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  animation: scrollLoop 20s linear infinite;

  /* Hide the scrollbar */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  &::-webkit-scrollbar {
    display: none; /* Chrome and Safari */
  }
`;


const CertificateImageLink = styled.a`
  flex: 0 0 auto;
  margin: 10px;
  scroll-snap-align: start;
`;

const CertificateImage = styled.img`
  width: 200px;
  height: auto;
`;

class Skills extends Component {
  constructor(props) {
    super(props);
    this.galleryRef = React.createRef();
  }

  componentDidMount() {
    this.startCarousel();
  }

  componentWillUnmount() {
    this.stopCarousel();
  }

  startCarousel() {
    this.carouselInterval = setInterval(() => {
      if (this.galleryRef.current) {
        const gallery = this.galleryRef.current;
        const scrollLeft = gallery.scrollLeft;
        const galleryWidth = gallery.scrollWidth - gallery.clientWidth;
        const nextScrollLeft = scrollLeft >= galleryWidth ? 0 : scrollLeft + gallery.clientWidth;

        gallery.scrollTo({
          left: nextScrollLeft,
          behavior: 'smooth',
        });
      }
    }, 5000);
  }

  stopCarousel() {
    clearInterval(this.carouselInterval);
  }

  render() {
    return (
      <Container>
        <SkillsTitle>SKILLS</SkillsTitle>
        <SkillsList>
          <div>
            Design system
            <br />
            Wireframing &amp; Prototyping
            <br />
            Prince2 certified
            <br />
            <br />
            Figma
            <br />
            Figjam
            <br />
            Salesforce Ranger
            <br />
          </div>
          <div>
            Responsive &amp; Adaptive Design
            <br />
            Component Design
            <br />
            UI Maintenance
            <br />
            <br />
            Angular
            <br />
            JavaScript
            <br />
            Node JS
            <br />
          </div>
        </SkillsList>

        <CertificateGallery ref={this.galleryRef}>
          <CertificateImageLink href="https://i.ibb.co/SyG2L4M/UC-8a228f64-b1ef-4af9-91b4-45c6d95f344f.jpg" target="_blank">
            <CertificateImage src="https://i.ibb.co/SyG2L4M/UC-8a228f64-b1ef-4af9-91b4-45c6d95f344f.jpg" alt="Certificate 1" />
          </CertificateImageLink>
          <CertificateImageLink href="https://i.ibb.co/4PScnYX/UC-1e292c0e-9a15-4ce4-83e9-fceaab5d7cd4.jpg" target="_blank">
            <CertificateImage src="https://i.ibb.co/4PScnYX/UC-1e292c0e-9a15-4ce4-83e9-fceaab5d7cd4.jpg" alt="Certificate 2" />
          </CertificateImageLink>
          <CertificateImageLink href="https://i.ibb.co/4ZLGWZC/UC-1f48a65a-0bac-42ac-aaee-ebb0aab31fcd.jpg" target="_blank">
            <CertificateImage src="https://i.ibb.co/4ZLGWZC/UC-1f48a65a-0bac-42ac-aaee-ebb0aab31fcd.jpg" alt="Certificate 3" />
          </CertificateImageLink>
          <CertificateImageLink href="https://i.ibb.co/s1yX3Qs/UC-06d5461e-d41d-4652-b248-5b0a569041e1.jpg" target="_blank">
            <CertificateImage src="https://i.ibb.co/s1yX3Qs/UC-06d5461e-d41d-4652-b248-5b0a569041e1.jpg" alt="Certificate 4" />
          </CertificateImageLink>
          <CertificateImageLink href="https://i.ibb.co/LvcYRr8/UC-6b56c1ef-9807-43f4-bbf7-763ce9fd2bd2.jpg" target="_blank">
            <CertificateImage src="https://i.ibb.co/LvcYRr8/UC-6b56c1ef-9807-43f4-bbf7-763ce9fd2bd2.jpg" alt="Certificate 5" />
          </CertificateImageLink>
          <CertificateImageLink href="https://i.ibb.co/SyG2L4M/UC-8a228f64-b1ef-4af9-91b4-45c6d95f344f.jpg" target="_blank">
            <CertificateImage src="https://i.ibb.co/SyG2L4M/UC-8a228f64-b1ef-4af9-91b4-45c6d95f344f.jpg" alt="Certificate 6" />
          </CertificateImageLink>
          <CertificateImageLink href="https://i.ibb.co/NWpFMz4/UC-76a2db1c-d761-49ef-8816-6d47a730b76f.jpg" target="_blank">
            <CertificateImage src="https://i.ibb.co/NWpFMz4/UC-76a2db1c-d761-49ef-8816-6d47a730b76f.jpg" alt="Certificate 7" />
          </CertificateImageLink>
          <CertificateImageLink href="https://i.ibb.co/Z6dQ4yp/UC-77af04ba-e9a6-4578-a689-2f8336524ec2-1.jpg" target="_blank">
            <CertificateImage src="https://i.ibb.co/Z6dQ4yp/UC-77af04ba-e9a6-4578-a689-2f8336524ec2-1.jpg" alt="Certificate 8" />
          </CertificateImageLink>
          <CertificateImageLink href="https://i.ibb.co/HTbKBTZ/UC-93dcdf48-e64a-46e1-92b3-919d7306e78e-1.jpg" target="_blank">
            <CertificateImage src="https://i.ibb.co/HTbKBTZ/UC-93dcdf48-e64a-46e1-92b3-919d7306e78e-1.jpg" alt="Certificate 9" />
          </CertificateImageLink>
          <CertificateImageLink href="https://i.ibb.co/wBM3dLn/UC-a2ac7cfa-ee04-4db9-8008-c342afe83112.jpg" target="_blank">
            <CertificateImage src="https://i.ibb.co/wBM3dLn/UC-a2ac7cfa-ee04-4db9-8008-c342afe83112.jpg" alt="Certificate 10" />
          </CertificateImageLink>
          <CertificateImageLink href="https://i.ibb.co/ZGC487F/UC-aa6b97d3-e1f2-4298-b89f-31ec92077e62.jpg" target="_blank">
            <CertificateImage src="https://i.ibb.co/ZGC487F/UC-aa6b97d3-e1f2-4298-b89f-31ec92077e62.jpg" alt="Certificate 11" />
          </CertificateImageLink>
          <CertificateImageLink href="https://i.ibb.co/9p0MQSh/UC-da50dcfe-96f0-4100-97cb-60fadd0dc4ac.jpg" target="_blank">
            <CertificateImage src="https://i.ibb.co/9p0MQSh/UC-da50dcfe-96f0-4100-97cb-60fadd0dc4ac.jpg" alt="Certificate 12" />
          </CertificateImageLink>
          <CertificateImageLink href="https://i.ibb.co/9ZKjTmf/UC-ead34a9d-415f-4594-a3d0-809e1c2e4845-1.jpg" target="_blank">
            <CertificateImage src="https://i.ibb.co/9ZKjTmf/UC-ead34a9d-415f-4594-a3d0-809e1c2e4845-1.jpg" alt="Certificate 13" />
          </CertificateImageLink>
          <CertificateImageLink href="https://i.ibb.co/c8zwQ6R/UC-f03d711a-a59b-4351-b0c2-0c910327e86f.jpg" target="_blank">
            <CertificateImage src="https://i.ibb.co/c8zwQ6R/UC-f03d711a-a59b-4351-b0c2-0c910327e86f.jpg" alt="Certificate 14" />
          </CertificateImageLink>
          <CertificateImageLink href="https://i.ibb.co/KXh0jXv/UC-f3bd9dca-b62e-46e4-9b36-684f846613c4.jpg" target="_blank">
            <CertificateImage src="https://i.ibb.co/KXh0jXv/UC-f3bd9dca-b62e-46e4-9b36-684f846613c4.jpg" alt="Certificate 15" />
          </CertificateImageLink>
        </CertificateGallery>
      </Container>
    );
  }
}

export default Skills;
