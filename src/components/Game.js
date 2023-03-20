import { Unity, useUnityContext } from "react-unity-webgl";
import Navbar from "./Navbar";
export default function Game () {
    const { unityProvider } = useUnityContext({
        loaderUrl: "Build/export2.loader.js",
        dataUrl: "Build/export2.data",
        frameworkUrl: "Build/export2.framework.js",
        codeUrl: "Build/export2.wasm",
    });
    console.log("hièuheihy")
    return (
        <div>
            <Navbar></Navbar>
            <Unity unityProvider={unityProvider} 
                style={{ width: 800, height: 450 }}
                devicePixelRatio={devicePixelRatio}
            />
        </div>
    );
};