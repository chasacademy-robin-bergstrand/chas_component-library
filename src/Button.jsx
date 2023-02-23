export default function Button({
    size = "small",
    color = "default",
    disabled = false,
    rounded = "default",
    title,
    onClick,
}) {
    if (disabled) {
        color = "disabled";
        onClick = null;
    }

    const styles = {
        size: {
            small: "px-3 py-2",
            large: "px-6 py-3 text-lg",
        },
        color: {
            default: "bg-blue-600 hover:bg-blue-700 text-white",
            success: "bg-green-600 hover:bg-green-700 text-white",
            failure: "bg-red-600 hover:bg-red-700 text-white",
            warning: "bg-yellow-600 hover:bg-yellow-700 text-white",
            purple: "bg-purple-600 hover:bg-purple-700 text-white",
            disabled: "bg-gray-700 text-white",
        },
        rounded: {
            default: "rounded-lg",
            pill: "rounded-full",
            square: "",
        },
    };

    return (
        <button
            className={` ${styles.rounded[rounded]} ${styles.size[size]} ${
                styles.color[color]
            } ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`}
            onClick={onClick}
        >
            {title}
        </button>
    );
}
