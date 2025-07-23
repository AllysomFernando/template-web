"use client"
import { useIsMobile } from "@/hooks/useBreakpoint";
import MobileHome from "./mobile";
import DesktopHome from "./desktop";

export default function HomeTemplate(){
    const { isMobile, hasMounted } = useIsMobile();
    console.log(isMobile)
    
    if (!hasMounted) {
        return null; // renderizar um eskeleon
    }
    
    return isMobile ? <MobileHome /> : <DesktopHome/>
}