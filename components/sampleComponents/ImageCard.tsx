import Link from "next/link";
import Button from "./Button";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

interface ImageCardProps {
  imageSrc: string;
  title: string;
  bodyText: string;
  buttonText: string;
  buttonLink: string;
}

const ImageCard = ({
  imageSrc,
  title,
  bodyText,
  buttonText,
  buttonLink,
}: ImageCardProps) => {
  return (
    <div className="max-w-sm rounded-lg border border-gray-200 bg-tertiary shadow dark:border-tertiary dark:bg-primary">
      <Link href="#">
        {/*TODO Convert to next/Image*/}
        <img className="rounded-t-lg" src={imageSrc} alt="Image" />
      </Link>
      <div className="p-5">
        <Link href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
            {title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {bodyText}
        </p>
        <Link href={buttonLink}>
          <Button
            type="button"
            className="flex flex-row items-center rounded-lg bg-primary px-3 py-2 text-center text-sm font-medium text-white hover:bg-white hover:text-primary focus:outline-none dark:bg-tertiary dark:text-white dark:hover:bg-secondary dark:hover:text-primary"
          >
            {buttonText}
            <ChevronRightIcon className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ImageCard;
