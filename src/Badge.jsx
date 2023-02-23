export default function Badge({
    children,
    color = "blue",
    size = "default",
    icon,
    href,
}) {
    const styles = {
        color: {
            blue: "bg-blue-200 text-blue-900",
            red: "bg-red-200 text-red-900",
            yellow: "bg-yellow-200 text-yellow-900",
            green: "bg-green-200 text-green-900",
            purple: "bg-purple-200 text-purple-900",
            orange: "bg-orange-200 text-orange-900",
        },
        hovercolor: {
            blue: "hover:bg-blue-300",
            red: "hover:bg-red-300",
            yellow: "hover:bg-yellow-300",
            green: "hover:bg-green-300",
            purple: "hover:bg-purple-300",
            orange: "hover:bg-orange-300",
        },
        size: {
            default: "px-2 py-0.5 text-xs font-semibold",
            large: "px-3 py-1 text-sm font-semibold",
        },
    };

    return (
        <div
            className={`flex items-center gap-1 ${styles.color[color]}  ${
                styles.size[size]
            } rounded-md ${
                href ? styles.hovercolor[color] + " cursor-pointer" : ""
            }`}
        >
            {icon ? icon : ""}
            {children}
        </div>
    );
}
