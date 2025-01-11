export default function LoadingPage() {
  return (
    <div className="bg-black">
      <div className="min-h-screen bg-gradient-to-r to-green-950 from-black flex items-center justify-center text-center text-balance flex-col gap-8 px-4">
        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-800 animate-bounce">
          Loading
        </h1>
        <p className="text-xl max-w-screen-xl text-white">take it easy</p>
      </div>
    </div>
  );
}
