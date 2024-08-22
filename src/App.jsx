import { useState } from "react";
import { Detail } from "./Detail";
import { preload, preconnect, prefetchDNS } from "react-dom";

const App = () => {
    const [isDetailsShown, setIsDetailsShown] = useState(false);
    preload("https://zrozumiecreact.pl/dog.jpg", {
        as: "image",
        fetchPriority: "high",
    });
    preconnect("https://example.com");
    prefetchDNS("https://example.com");

    return (
        <>
            <h1>
                To prosta aplikacja przedstawiająca nowe możliwości React 19.
            </h1>
            <button onClick={() => setIsDetailsShown(true)}>
                Pokaż szczegół
            </button>
            {isDetailsShown && <Detail />}
        </>
    );
};
export default App;
