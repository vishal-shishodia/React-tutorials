import { useEffect, useState } from "react";

export function useDocumentTitle(count){
    
    useEffect(()=>{
        document.title=`You clicked ${count} times`
    },[count])
}