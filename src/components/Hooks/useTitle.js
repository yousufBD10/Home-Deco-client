import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Home Deco`;
    }, [title])
};

export default useTitle;