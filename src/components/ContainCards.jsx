import{ Box} from "@mui/material"

import CardMovie from "./CardMovie"
import PaginationApp from "./PaginationApp"

export default function ContainCards({data, currentPage, setCurrentPage, totalPages}) {
 
  return (
    <div>
     <Box sx={{width: "95%"}}>
     <Box sx={{
        display:"flex", 
        width: "90%",
        justifyContent:"space-around", 
        flexWrap:"wrap",
        padding: "20px"
        
        }}>
        {data && data.map ((movie) => {
            return ( <CardMovie title={movie.title} id={movie.id} backdrop_path={movie.backdrop_path} overview={movie.overview} movie={movie} key={movie.id}/> )
        })}
       
      </Box>
      <PaginationApp setCurrentPage={setCurrentPage} currentPage={currentPage} totalPages={totalPages}/>
     </Box>
    
    </div>
  )
}
