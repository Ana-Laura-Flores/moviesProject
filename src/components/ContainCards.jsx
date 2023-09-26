import{ Box} from "@mui/material"

import CardMovie from "./CardMovie"
import PaginationApp from "./PaginationApp"

export default function ContainCards({data, currentPage, setCurrentPage, totalPages}) {
 
  return (
    <div>
     <Box>
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
      <PaginationApp setCurrentPage={setCurrentPage} currentPage={currentPage} totalPages={totalPages}/>
     </Box>
    
    </div>
  )
}
