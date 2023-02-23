export default function Card({
    children,
    href,
    imgAlt,
    imgSrc,
    imgHorizontal,
}) {
    const inside = (
        <div
            className={`flex ${
                imgHorizontal ? "flex-row" : "flex-col"
            } overflow-hidden border rounded-lg  ${
                href ? "hover:bg-gray-100" : ""
            }`}
        >
            {imgSrc ? (
                <img
                    src={imgSrc}
                    alt={imgAlt}
                    className={`${imgHorizontal ? "w-1/2" : ""}`}
                ></img>
            ) : (
                ""
            )}
            <div
                className={`p-5 flex flex-col gap-3 ${
                    imgHorizontal ? "w-1/2" : ""
                }`}
            >
                {children}
            </div>
        </div>
    );

    return <>{href ? <a href={href}>{inside}</a> : <div>{inside}</div>}</>;
}
