import { useRouter } from "next/router";
// TODO Add Dark Mode
export default function ServerError() {
  const router = useRouter();
  return (
    <div className={`flex min-h-screen w-full`}>
      <div
        className={`z-10 grid min-h-screen w-full place-items-center bg-500 `}
      >
        <div>
          {/*TODO Customize Font*/}
          <div className={`flex`}>
            <p className={`text-center text-9xl text-primary drop-shadow-2xl`}>
              5
            </p>
            <p className={`text-center text-9xl text-white drop-shadow-2xl`}>
              0
            </p>
            <p className={`text-center text-9xl text-tertiary drop-shadow-2xl`}>
              0
            </p>
          </div>
          <button
            className={`text-center text-4xl text-white drop-shadow-2xl hover:text-primary`}
            onClick={() => router.push(`/`)}
          >
            Take Me Home
          </button>
        </div>
      </div>
    </div>
  );
}
