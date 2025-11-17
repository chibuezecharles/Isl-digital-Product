import { useNavigate } from "react-router-dom";
import { Button } from "../ui/Button";
import Webcam from "react-webcam";
import { useCallback, useRef, useState } from "react";

type Props = {
  onCapture: (imgData: string) => void;
};

export default function LivenessCheck({ onCapture }: Props) {
  const navigate = useNavigate();
  const webcamRef = useRef<Webcam>(null);

  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [prompt, setPrompt] = useState<string>("Please smile for verification");
  const [facingMode, setFacingMode] = useState<"user" | "environment">("user");

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode,
  };

  const capture = useCallback(() => {
    const screenshot = webcamRef.current?.getScreenshot();
    if (!screenshot) return;

    setImgSrc(screenshot);
    onCapture(screenshot); // screenshot is BASE64 already
  }, [onCapture]);

  const switchCamera = () => {
    setFacingMode((prev) => (prev === "user" ? "environment" : "user"));
  };

  const retake = () => {
    setImgSrc(null);
    setPrompt("Please smile for verification");
  };

  return (
    <div className="mt-10 p-4 flex justify-center items-center">
      <div className="w-full md:w-3/4 rounded-xl bg-white shadow-md py-5 px-4 md:p-8">
        <h1 className="text-2xl font-semibold text-primary-100 mb-2">
          Liveness Check
        </h1>

        <p className="text-gray-600 mb-5">
          Complete this quick face capture to verify your identity.
        </p>

        <div className="flex flex-col items-center space-y-4">
          {!imgSrc ? (
            <>
              <div className="w-full max-w-xl aspect-[4/3] bg-gray-100 overflow-hidden rounded-lg relative">
                <Webcam
                  audio={false}
                  mirrored={facingMode === "user"}
                  ref={webcamRef}
                  screenshotFormat="image/jpeg"
                  videoConstraints={videoConstraints}
                  className="object-cover w-full h-full"
                />

                {/* Switch Camera Button */}
                <button
                  onClick={switchCamera}
                  className="absolute top-3 right-3 bg-black/60 text-white px-3 py-1 rounded-md text-sm"
                >
                  Switch
                </button>
              </div>

              <p className="text-lg text-gray-700">{prompt}</p>

              <Button onClick={capture} className="">
                Capture Photo
              </Button>
            </>
          ) : (
            <>
              <div className="w-full max-w-xl aspect-[4/3] rounded-lg overflow-hidden border-2 border-blue-600">
                <img
                  src={imgSrc}
                  alt="Captured"
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="flex space-x-4">
                <Button
                  onClick={retake}
                  className="px-5 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
                >
                  Retake
                </Button>

                <Button onClick={() => navigate("/onboarding/select-bundle")}>
                  Continue
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
