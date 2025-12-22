import MainContainer from "@/components/MainContainer";
import Avatar from "@/components/Avatar";
import Header from "@/components/Header";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import SelfIntro from "@/components/SelfIntro";

export default function Home() {
  return (
    <MainContainer>
      <Avatar
        src="https://yt3.googleusercontent.com/S_yS7rBeiQKooTgarK9zbt9J7IT4cFYJiYGG47jiQxy6y2AtDeUiBBh1hI61J6qbtvFVyZmo=s160-c-k-c0x00ffffff-no-rj"
      />
      <Header>
        Souma 相馬
      </Header>
      <SelfIntro>
        (Self intro tbc.)
      </SelfIntro>

      <Button
        icon="/sns/instagram.svg"
        href="https://www.instagram.com/soumasandesu_cos"
      >
        Instagram
      </Button>
      <Button
        icon="/sns/x.svg"
        href="https://x.com/souma_san_desu"
      >
        X
      </Button>
      <Button
        icon="/sns/facebook.svg"
        href="https://www.facebook.com/scohuamralhiierpoooomni"
      >
        Facebook
      </Button>
      <Button
        icon="/sns/github.svg"
        href="https://github.com/soumasandesu"
      >
        GitHub
      </Button>

      <Footer>
        2025-12-22
      </Footer>
    </MainContainer>
  );
}
