interface User {
  name: string,
  description: string,
  avatar: string,
  onClick: () => void;
}

export const CustomClient = ({ name, description, avatar, onClick }: User) => {
  return (
    <div className="flex justify-start items-center flex-col">
      <div className="flex flex-col items-center gap-2 bg-white p-3 rounded-sm mb-5">
        <img
          src={avatar}
          alt={description}
          className="max-w-xl rounded mt-3"
          style={{ height: '20rem' }}
        />
        <div className="max-w-xl ">
          <h2 className="text-slate-500 font-semibold mb-2 text-2xl">{name}</h2>
          <p className="text-black">{description}</p>
        </div>
      </div>
      <button
        onClick={onClick}
        className="text-white p-3 rounded-sm"
        style={{ backgroundColor: "#192A51" }}>
        Change Picture
      </button>
    </div>
  )
}
