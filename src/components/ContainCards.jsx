import Box from "@mui/material/Box"

import CardMovie from "./CardMovie"
import Header from "./Header"


export default function ContainCards({data}) {
 
  //console.log(movies)
  return (
    <div>
     
      <Box sx={{
        display:"flex", 
        justifyContent:"space-around", 
        flexWrap:"wrap",
        padding: "20px"
        
        }}>
        {data && data.map (({title, id, backdrop_path, overview}) => {
            return ( <CardMovie title={title} id={id} backdrop_path={backdrop_path} overview={overview} key={id}/> )
        })}
       
      </Box>
    </div>
  )
}
