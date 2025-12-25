import Page from "@/components/Page";
import Avatar from "@/components/Avatar";
import Header from "@/components/Header";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import SelfIntro, { Collapsed as SelfIntroCollapsed } from "@/components/SelfIntro";
import Head from "next/head";

export async function getStaticProps() {
  const buildDate = new Date().toISOString().split('T')[0];
  
  return {
    props: {
      buildDate,
    },
  };
}

export default function Home({ buildDate }) {
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
          Souma
          <br/>
          相馬
        </Header>
        <SelfIntroCollapsed>
          <p>
            A jack of all trades — cosplayer, IT guy, motorider, ... — but master of none.
            <br/>
            周身刀，唔知係咪每張利嘅 Cosplayer / IT9 / 26友 / ……
          </p>
          <p>
            Been coding since secondary education, 
            <br/>
            and even having some achievements on the HKGolden long time ago.
            <br/>
            讀中學嘅時候已經識揼 code ，甚至喺好多年前嘅高登就已經小有成就。
          </p>
          <p>
            In university, I accidentally joined the ACG Society, 
            <br/>
            organized some events, and started cosplaying at the same time. 
            <br/>
            (Might even accidentally created the precedent of having Cosplayer Event Helper.)
            <br/>
            大學時期誤打誤撞入咗漫 soc ，搞過吓活動，順勢嗰時開始出 cos 。
            <br/>
            （甚至唔覺意開創咗 cos event staff 嘅先河。）。
          </p>
          <p>
            Worked on projects from infrastructure to full-stack, 
            <br/>
            in a major platform company.
            <br/>
            喺某大型平台公司負責過由 infrastructure 到 full-stack 嘅 project。
          </p>
        </SelfIntroCollapsed>
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
          icon="/sns/bluesky.svg"
          href="https://bsky.app/profile/soumasandesu.bsky.social"
        >
          Bluesky
          <br/>
          <code>
            @soumasandesu.bsky.social
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
        {buildDate}
      </Footer>
    </Page>
  );
}
