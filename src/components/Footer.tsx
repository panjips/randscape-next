import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-50">
      <section className="mx-auto w-full py-8 px-6 md:px-8 lg:px-16 xl:px-36">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="https://github.com/panjips"
            target="_blank"
            className="flex justify-center text-slate-700 hover:text-blue-700 transition-colors sm:justify-start"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-github"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </Link>

          <p className="mt-4 text-center text-sm text-slate-700 lg:mt-0 lg:text-right">
            Publish personal project.
          </p>
        </div>
      </section>
    </footer>
  );
}
