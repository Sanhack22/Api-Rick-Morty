
export const Card = ({image,name,specimen}) => {
  return (
    <div className="bg-blue-400 rounded-2xl	 w-64 text-white text-center m-3">
        <img src={image}/>
        <p>{name}</p>
        <p>{specimen}</p>
    </div>
  )
}
