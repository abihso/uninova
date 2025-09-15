import Cardinfodescription from "./card-info-description"

// eslint-disable-next-line react/prop-types
const Cardinfo = ({color1,color2,title,data}) => {
  return (
    <>
      <div className="flex justify-between mb-2 ">
        <p className="font-bold">{ title}</p>
        <p className="text-xs underline" >view all</p>
      </div>
      <Cardinfodescription color1={color1} color2={color2} data={data}/>  
    </>
  )
}

export default Cardinfo