import { useRouter } from "next/router";
// TODO Add Dark Mode
export default function ServerError() {
  const router = useRouter();
  return (
    <div className={`w-full min-h-screen flex`}>
      <div
        className={`w-full bg-500 min-h-screen grid place-items-center z-10 `}
      >
        <div>
          {/*TODO Customize Font*/}
          <div className={`flex`}>
            <p className={`drop-shadow-2xl text-primary text-center text-9xl`}>
              5
            </p>
            <p className={`drop-shadow-2xl text-white text-center text-9xl`}>
              0
            </p>
            <p className={`drop-shadow-2xl text-tertiary text-center text-9xl`}>
              0
            </p>
          </div>
          <button
            className={`hover:text-primary drop-shadow-2xl text-white text-center text-4xl`}
            onClick={() => router.push(`/`)}
          >
            Take Me Home
          </button>
        </div>
      </div>
    </div>
  );
}
