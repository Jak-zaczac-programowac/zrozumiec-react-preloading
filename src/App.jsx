import { useState } from "react";
import { Detail } from "./Detail";

const App = () => {
    const [isDetailsShown, setIsDetailsShown] = useState(false);

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
