import PageTemplate from "../components/templates/page";
import { Hero, TextBlock, IconColumn } from "../components/modules";
import { H3 } from "../components/elements";
import SingleColumn from "../components/layouts/single_column";

export default function Home() {
  return (
    <PageTemplate>
      <Hero heading="Home" subheading="home" />
      <SingleColumn>
        <TextBlock
          heading="About Us"
          content="At Ribbit &amp; Roo our main drive is to empower children and families to choose a healthy lifestyle through imaginative, structured, play-based physical activity.
We aim to do this by helping provide each child with the start they need in physical literacy - motivation, skill, confidence and knowledge.
We believe throughout Early childhood each child should have the opportunity to participate in a range of gross motor activities which can help their understanding of health and well-being from an early age. Each child's social & emotional well-being is just as important as their physical well-being at Ribbit & Roo. We believe it is important to build self esteem, resilience and strengthen peer relationships through structured, active play."
        ></TextBlock>
        <H3 content="What we offer" />
        <IconColumn
          heading="Play Sessions"
          content="Ribbit &amp; Roo are passionate about giving children aged 2 - 4 the opportunity to participate in a range of activities which can help develop physical literacy and improve gross motor development.
Our weekly play sessions are age appropriate, fun and filled with imaginative play. Play sessions are a perfect start to your child's physical, social and emotional development."
          buttonText="Learn more"
          buttonURL="/terms-and-conditions"
        />
      </SingleColumn>
    </PageTemplate>
  );
}
