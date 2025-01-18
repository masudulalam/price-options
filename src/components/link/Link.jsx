const Link = ({ route }) => {
    return (
        <>
            <li key={route.id} className="hover:bg-gray-400 p-2 rounded-md">
                <a href={route.path}>{route.name}</a>
            </li>
        </>
    );
};

export default Link;