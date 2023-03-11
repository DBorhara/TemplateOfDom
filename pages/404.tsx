import { useRouter } from "next/router";
// TODO Add Dark Mode
export default function NotFound() {
  const router = useRouter();
  return (
    <div className={`flex min-h-screen w-full`}>
      <div
        className={`z-10 grid min-h-screen w-full place-items-center bg-404 `}
      >
        <div>
          {/*TODO Customize Font*/}
          <div className={`flex`}>
            <p className={`text-center text-9xl text-tertiary drop-shadow-2xl`}>
              4
            </p>
            <p className={`text-center text-9xl text-white drop-shadow-2xl`}>
              0
            </p>
            <p className={`text-center text-9xl text-primary drop-shadow-2xl`}>
              4
            </p>
          </div>
          <button
            className={`text-center text-4xl text-white drop-shadow-2xl hover:text-tertiary`}
            onClick={() => router.push(`/`)}
          >
            Take Me Home
          </button>
        </div>
      </div>
    </div>
  );
}
