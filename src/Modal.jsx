export default function Modal({
    show = false,
    onClose,
    size = ["400px", "400px"],
    children,
}) {
    const height = `w-[${size[0].toString()}]`;

    return (
        <div
            className={`${
                !show ? "hidden" : ""
            } fixed w-screen h-screen left-0 top-0 grid place-items-center bg-gray-800 bg-opacity-80`}
        >
            <div
                className={`bg-white flex flex-col rounded-xl`}
                style={{ width: size[0], minheight: size[1] }}
            >
                {children}
            </div>
            <div
                className="fixed w-screen h-screen -z-10"
                onClick={onClose}
            ></div>
        </div>
    );
}

function Header({ children }) {
    return (
        <div className="p-8 border-b">
            <h3 className="text-2xl">{children}</h3>
        </div>
    );
}
function Body({ children }) {
    return <div className="p-8 my-auto">{children}</div>;
}
function Footer({ children }) {
    return <div className="p-8 border-t">{children}</div>;
}

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;
