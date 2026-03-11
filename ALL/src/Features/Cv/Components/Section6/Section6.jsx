import "./Section6.css";

export function Section6 ({Data, Theme}) {
    return(
        <div className = {`Section Theme-${Theme}`}>
            <h1>{Data.Section6.Title}</h1>
        </div>
    )
}