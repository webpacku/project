import {Link} from "@tanstack/react-router";

export function TextParser(text: string) {
    const regex = /(#\w+)/g;
    return text.split(regex).map((part: string, index:number) => {
        return part.match(regex) ? (
            <Link
                to="/"
                search={{
                    search: part // minta rype search nya
                }}
                key={index}
                className="text-blue-500"
            >
                {part}
            </Link>
        ) : (
            part
        );
    });
};
