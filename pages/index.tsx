import LegacyImage from "next/legacy/image";
import Image from "next/image";
export default function Home() {
  return (
    <div>
      <img
        src="/bear.jpg"
        alt="It's just an image but bear with me"
        title="It's just an image but bear with me"
      />
      <LegacyImage
        src="/bear.jpg"
        alt="It's just an image but bear with me"
        title="It's just an image but bear with me"
        width="1920"
        height="1080"
        layout="responsive"
      />
      <Image
        src="/bear.jpg"
        alt="It's just an image but bear with me"
        title="It's just an image but bear with me"
        width="1920"
        height="1080"
        layout="responsive"
      />
    </div>
  );
}

//  If uncomment next export doesn't work
// export function getStaticProps() {}
// export function getStaticPaths() {}
