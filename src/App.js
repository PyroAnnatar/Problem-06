// Her bir butonun üzerine, içerikte yazan eyleme karşılık gelen satır içi/inline stiller ekleyin
export default function ButtonVariants() {
  return (
    <>
      <span className="wrapper flex gap-2 text-white">
        <button className="button-create px-4 py-3 bg-green-500 hover:bg-green-500/70 active:scale-x-110 active:scale-y-90 transition-transform duration-[5ms] shadow-md rounded-md font-semibold">
          Create
        </button>
        <button className="button-update px-4 py-3 bg-orange-500 hover:bg-orange-500/70 active:scale-x-110 active:scale-y-90 transition-all duration-[5ms] shadow-md rounded-md font-semibold">
          Update
        </button>
        <button className="button-delete px-4 py-3 bg-red-500 hover:bg-red-500/70 active:scale-x-110 active:scale-y-90 transition-transform duration-[5ms] shadow-md rounded-md font-semibold">
          Delete
        </button>
      </span>
      <div className="px-4 py-2 bg-blue-300 rounded-md font-semibold text-center text-white mt-3 mx-auto min-w-80 shadow-[0_0_5px_rgba(0,0,0,0.1)] hover:scale-105 transition-all duration-200 hover:text-zinc-900 hover:drop-shadow-[0_0_5px_rgb(0,0,0,0.3)] hover:border-stone-400 hover:border-[0.7px]">
        Testing Tailwind
      </div>
    </>
  );
}
