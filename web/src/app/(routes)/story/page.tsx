import Container from "@/components/shared/Container";
import PageHeading from "@/components/shared/PageHeading";
import StoryChapters from "@/pages/story/StoryChapters";

export default function StoryPage() {
  return (
    <Container className="pt-32 pb-16 lg:pt-48">
      <PageHeading title="Three acts." titleHighlighted="One missing key." />
      <StoryChapters />
    </Container>
  );
}
