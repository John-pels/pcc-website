import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    body{
        background-color: #fff;
    }



    *, *::before, *::after{
        box-sizing: border-box;
    }
    
    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 8px;
        background: #888;
    }
`
