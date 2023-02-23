import Button from "./Button";
import Alert from "./Alert";
import Badge from "./Badge";
import Card from "./Card";
import Modal from "./Modal";
import { AiFillWarning, AiOutlineClockCircle } from "react-icons/ai";
import { IoMdCheckmark } from "react-icons/io";
import { useState } from "react";

function close() {
    alert("Alert closed");
}

function App() {
    const [modal1Open, setModal1Open] = useState(false);
    const [modal2Open, setModal2Open] = useState(false);

    return (
        <div className="p-3 flex flex-col gap-5">
            <div>
                <h2 className="text-2xl font-semibold">Buttons</h2>
                <div className="flex gap-2 items-center">
                    <Button title={"Default everything"} />
                    <Button title={"Success"} color={"success"} />
                    <Button title={"Failure"} color={"failure"} />
                    <Button title={"Warning"} color={"warning"} />
                    <Button title={"Purple"} color={"purple"} />
                    <Button disabled title={"Disabled"} />
                    <Button title={"Large"} size={"large"} />
                    <Button
                        title={"Large pill"}
                        size={"large"}
                        rounded={"pill"}
                    />
                    <Button title={"Square"} rounded={"square"} />
                </div>
            </div>
            <div className="w-[750px]">
                <h2 className="text-2xl font-semibold mb-2">Alerts</h2>
                <div className="flex flex-col gap-3">
                    <Alert>
                        <span className="font-bold">Info! </span>
                        Critical information.
                    </Alert>
                    <Alert color={"error"}>
                        <span className="font-bold">Error! </span>
                        Something has gone wrong.
                    </Alert>
                    <Alert color={"warning"} rounded={false}>
                        <span className="font-bold">Warning! </span>
                        This alert is yellow and not rounded.
                    </Alert>
                    <Alert onDismiss={close}>
                        <span className="font-bold">Warning! </span>
                        This alert has a close button.
                    </Alert>
                    <Alert
                        color={"error"}
                        onDismiss={close}
                        icon={<AiFillWarning />}
                    >
                        <span className="font-bold">Warning! </span>
                        This alert also has an icon.
                    </Alert>
                </div>
            </div>
            <div>
                <h2 className="text-2xl font-semibold mb-2">Badges</h2>
                <div className="flex gap-2 items-center">
                    <Badge>Admin</Badge>
                    <Badge color={"red"}>User</Badge>
                    <Badge color={"green"}>Bot</Badge>
                    <Badge color={"yellow"}>Premium</Badge>
                    <Badge color={"purple"} size={"large"}>
                        Large
                    </Badge>
                    <Badge color={"purple"} href={"/"}>
                        Link
                    </Badge>
                    <Badge color={"purple"} icon={<AiOutlineClockCircle />}>
                        30m
                    </Badge>
                    <Badge
                        color={"orange"}
                        size={"default"}
                        icon={<IoMdCheckmark />}
                    >
                        Verified
                    </Badge>
                </div>
            </div>
            <div>
                <h2 className="text-2xl font-semibold mb-2">Cards</h2>
                <div className="flex flex-col gap-4">
                    <div className="max-w-3xl">
                        <Card href={"#"}>
                            <h3 className="text-2xl text-slate-900">
                                Basic clickable card!
                            </h3>
                            <p className="text-slate-800">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Maxime culpa placeat quam.
                            </p>
                        </Card>
                    </div>
                    <div className="max-w-sm">
                        <Card
                            imgSrc={"https://picsum.photos/400/300"}
                            imgAlt={"Random 400x300 image"}
                        >
                            <h3 className="text-2xl text-slate-900">
                                Simple vertical image card!
                            </h3>
                            <p className="text-slate-800">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Maxime culpa placeat quam.
                            </p>
                        </Card>
                    </div>
                    <div className="max-w-sm">
                        <Card
                            imgSrc={"https://picsum.photos/300/400"}
                            imgAlt={"Random 300x400 image"}
                            imgHorizontal
                        >
                            <h3 className="text-2xl text-slate-900">
                                Simple horizontal image card!
                            </h3>
                            <p className="text-slate-800">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Maxime culpa placeat quam.
                            </p>
                        </Card>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-2xl font-semibold">Modals</h2>
                <div className="flex gap-2 items-center">
                    <Button
                        title={"Modal1"}
                        onClick={() => setModal1Open(true)}
                    />
                    <Modal
                        size={["400px", "500px"]}
                        show={modal1Open}
                        onClose={() => setModal1Open(false)}
                    >
                        <Modal.Header>Terms of service</Modal.Header>
                        <Modal.Body>
                            <div className="flex flex-col gap-10">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Magnam cum non recusandae
                                    nihil voluptatibus illum dolores doloribus
                                    saepe eligendi, sapiente labore eveniet
                                    repudiandae commodi ullam!
                                </p>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Labore dolore
                                    perspiciatis, eligendi molestias aliquid,
                                    corporis quasi exercitationem velit facilis
                                    cumque deleniti, cupiditate veritatis harum
                                    eum?
                                </p>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <div className="flex gap-4 items-center">
                                <Button
                                    title="Accept"
                                    color="success"
                                    onClick={() => setModal1Open(false)}
                                />
                                <Button
                                    title="Deny"
                                    color="failure"
                                    onClick={() => setModal1Open(false)}
                                />
                            </div>
                        </Modal.Footer>
                    </Modal>
                    <Button
                        title={"Modal2"}
                        onClick={() => setModal2Open(true)}
                    />
                    <Modal
                        show={modal2Open}
                        onClose={() => setModal2Open(false)}
                    >
                        <Modal.Header>Register</Modal.Header>
                        <Modal.Body>
                            <form action="" className="flex flex-col gap-4">
                                <div className="flex flex-col">
                                    <label htmlFor="uname">Username:</label>
                                    <input
                                        type="text"
                                        name="uname"
                                        id="uname"
                                        className="border p-2 rounded-lg  w-2/3"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="email">Email:</label>
                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        className="border p-2 rounded-lg"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="password">Password:</label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        className="border p-2 rounded-lg  w-2/3"
                                    />
                                </div>
                            </form>
                        </Modal.Body>
                        <Modal.Footer>
                            <div className="flex gap-4">
                                <Button
                                    title="Register"
                                    onClick={() => setModal2Open(false)}
                                    disabled
                                />
                                <Button
                                    title="Cancel"
                                    onClick={() => setModal2Open(false)}
                                />
                            </div>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default App;
