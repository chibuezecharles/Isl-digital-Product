import Spinner from "../ui/Spinner";

interface PageLoaderProps {
  loadingText?: string;
}

export default function PageLoader({
  loadingText = "Loading...",
}: PageLoaderProps) {
  return (
    <div className="absolute top-0 left-0 size-full flex flex-col justify-center items-center gap-4">
      <Spinner size="lg" color="primary" />
      <p className="text-primary-100 text-lg font-semibold">{loadingText}</p>
    </div>
  );
}
