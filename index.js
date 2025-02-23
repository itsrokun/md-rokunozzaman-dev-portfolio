import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="A portfolio website built with Next.js and Tailwind CSS" />
      </Head>
      
      <header className="p-5 bg-blue-600 text-white text-center text-2xl font-bold">
        Welcome to My Portfolio
      </header>

      <main className="p-10">
        <section className="mb-10">
          <h2 className="text-xl font-semibold">About Me</h2>
          <p className="mt-2">I am a web developer with expertise in modern web technologies.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold">Projects</h2>
          <ul className="mt-2 list-disc list-inside">
            <li>Project 1 - Description</li>
            <li>Project 2 - Description</li>
            <li>Project 3 - Description</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Contact</h2>
          <p className="mt-2">Email: example@example.com</p>
        </section>
      </main>
    </div>
  );
    }
