// import Link from "next/link";

export default function NotFound() {
  return (
    <div className={`w-full min-h-screen flex`}>
      <div className={`w-full bg-404 `}>
        <div className={`min-h-screen grid place-items-center z-10`}>
          <h1 className={`drop-shadow-md text-white`}>404</h1>
        </div>
      </div>
    </div>
  );
}
