
const FormComment = () => {
  return (
    <form className="w-full flex items-center gap-2 pt-4">
      <img className="shrink-0 bg-gray-500 w-10 h-10 object-cover rounded-full" src="/src/images/cewe.jpg" width={35} height={35} alt="profile picture" loading="lazy" />
      <div className="flex items-center border bg-gray-200 px-1.5 rounded-full h-10">
        <input type="text" className="bg-transparent w-full h-full text-sm px-2.5 outline-0 rounded-2xl" placeholder="Berikan tanggapan"/>
        <i className="shrink-0 cursor-pointer icons text-3xl text-blue-600">send</i>
      </div>
    </form>
  )
}

export default FormComment