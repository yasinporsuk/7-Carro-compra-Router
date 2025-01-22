import { useState , useEffect} from "react";
import LocalStorageServicio from "./Almacenamiento";

function useStorageState (Clave, valorInicial){

    const [state, setState] = useState( ()=> {


        const valorguardado = LocalStorageServicio.get(clave);

        
        return valorguardado!= null ? valorguardado : valorInicial;



    });
}

export default useStorageState;