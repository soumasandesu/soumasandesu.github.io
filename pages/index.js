import Page from "@/components/Page";
import Avatar from "@/components/Avatar";
import Header from "@/components/Header";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import SelfIntro from "@/components/SelfIntro";
import Head from "next/head";

export default function Home() {
  return (
    <Page>
      <Head>
        <title>Souma 相馬</title>
      </Head>

      <Section>        
        <Avatar
          src="https://yt3.googleusercontent.com/S_yS7rBeiQKooTgarK9zbt9J7IT4cFYJiYGG47jiQxy6y2AtDeUiBBh1hI61J6qbtvFVyZmo=s160-c-k-c0x00ffffff-no-rj"
        />
        <Header>
          Souma 相馬
        </Header>
        <SelfIntro>
          (Self intro tbc.)
        </SelfIntro>
      </Section>

      <Section>
        <Button
          icon="/sns/instagram.svg"
          href="https://www.instagram.com/soumasandesu_cos"
        >
          Instagram
          <br/>
          <code>
            @soumasandesu_cos
          </code>
        </Button>
        <Button
          icon="/sns/x.svg"
          href="https://x.com/souma_san_desu"
        >
          X
          <br/>
          <code>
            @souma_san_desu
          </code>
        </Button>
        <Button
          icon="/sns/facebook.svg"
          href="https://www.facebook.com/scohuamralhiierpoooomni"
        >
          Facebook
          <br/>
          <code>
            @scohuamralhiierpoooomni
          </code>
        </Button>
        <Button
          icon="/sns/github.svg"
          href="https://github.com/soumasandesu"
        >
          GitHub
          <br/>
          <code>
            @soumasandesu
          </code>
        </Button>
      </Section>

      <Footer>
        2025-12-22
      </Footer>
    </Page>
  );
}
