
import MusicPlayer from "@/components/MusicPlayer";

const Index = () => {
  return (
    <div className="min-h-screen now-playing-background flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-6xl h-[85vh] shadow-xl">
        <MusicPlayer />
      </div>
    </div>
  );
};

export default Index;
