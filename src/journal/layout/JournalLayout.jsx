/* eslint-disable react/prop-types */
import { Box } from "@mui/material"
import { Navbar, SideBar } from "../components";

const drawerWidth = 240; // default width of layout


export const JournalLayout = ({children}) => {
  return (
    <Box sx={{display: 'flex'}}>
        <Navbar drawerWidth={drawerWidth}/>
        
        <SideBar drawerWidth={drawerWidth}/>

        <Box component='main' sx={{flexGrow: 1, p:3}}>
            {/* Toolbar */}
            {children}
        </Box>
    </Box>  
  )
}
