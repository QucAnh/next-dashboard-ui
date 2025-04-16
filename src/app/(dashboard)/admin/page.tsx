const AdiminPage = () => {
  return (
    <div className="p-2 gap-4 flex flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 bg-orange-200">L</div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3 bg-blue-200">R</div>
    </div>
  );
}

export default AdiminPage;