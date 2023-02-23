import { GrClose } from "react-icons/gr";
import { MdClose } from "react-icons/md";

export default function Alert({
    color = "info",
    children,
    rounded = true,
    onDismiss,
    icon,
}) {
    const styles = {
        color: {
            info: "bg-sky-200 text-sky-900",
            error: "bg-red-100 text-red-900",
            warning: "bg-yellow-100 text-yellow-900",
        },
        Xcolor: {
            info: "bg-sky-300",
            error: "bg-red-200",
            warning: "bg-yellow-200",
        },
    };

    return (
        <div
            className={` ${styles.color[color]} ${
                rounded ? "rounded-lg" : ""
            } w-full px-4 py-3 flex gap-2 items-center`}
        >
            {icon ? icon : ""}
            {children}
            {onDismiss ? (
                <div
                    onClick={onDismiss}
                    className={`ml-auto ${styles.Xcolor[color]} bg-opacity-0 hover:bg-opacity-100 rounded-lg aspect-square cursor-pointer p-2`}
                >
                    <MdClose />
                </div>
            ) : (
                ""
            )}
        </div>
    );
}
