import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-10">
        Welcome to To-Doliy!
      </h1>
      <p className="text-center mt-4">
        An simple time management tracker with to do lists and mood identifier
      </p>
      <div className="flex justify-center mt-10">
        <Image
          src="/images/hero-image.png"
          alt="To-Doliy Hero Image"
          width={500}
          height={300}
        />
      </div>
    </div>
  );
}
