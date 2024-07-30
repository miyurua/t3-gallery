import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/5616d15c-17d4-4cb4-95ac-ae9d871c6c6b-rv9e2f.jpeg",
  "https://utfs.io/f/ae7c3b84-dee4-4567-b455-c052259fb2a7-rv9e2d.jpeg",
  "https://utfs.io/f/bef10629-d2c6-4ea5-8ec4-d653a116ad3f-5kvr1i.jpeg",
  "https://utfs.io/f/91ff25f3-f00b-41af-ae86-dc3e458f6d7a-1u06f.jpeg",
];

const mockImages = mockUrls.map((url, index) => ({ id: index + 1, url }));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages].map((img) => (
          <div key={img.id} className="w-1/5 p-4">
            <img src={img.url} />
          </div>
        ))}
      </div>
      Hello Gallery in progress
    </main>
  );
}
