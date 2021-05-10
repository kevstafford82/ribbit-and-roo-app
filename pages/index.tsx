import PageTemplate from "../components/templates/page";
import { Title, Paragraph } from "../components/modules";
import SingleColumn from "../components/layouts/single_column";

export default function Home() {
  return (
    <PageTemplate>
      <Title heading="Home" subheading="home" />
      <SingleColumn>
        <p>home</p>
      </SingleColumn>
    </PageTemplate>
  );
}
