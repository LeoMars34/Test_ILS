function Table({ setPolyline }) {
    async function getPolyline(coordinat) {
        let response = await fetch(
            `http://router.project-osrm.org/route/v1/driving/${coordinat}?overview=false`
        );
        return await response.json();
    }
    function handleClick(e, number) {
        let coord = routes[number];
        if (document.querySelector(".clickTr")) {
            document.querySelector(".clickTr").classList.remove("clickTr");
        }
        e.target.classList.add("clickTr");
        getPolyline(coord).then((response) => {
            setPolyline(response);
        });
    }
    let routes = {
        1: "59.84660399,30.29496392;59.82934196,30.42423701;59.83567701,30.38064206",
        2: "59.82934196,30.42423701;59.82761295,30.41705607;59.84660399,30.29496392",
        3: "59.83567701,30.38064206;59.84660399,30.29496392;59.82761295, 30.41705607",
    };
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Маршрут</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        onClick={(e) => {
                            handleClick(e, 1);
                        }}
                    >
                        <td>Маршрут №1</td>
                    </tr>
                    <tr
                        onClick={(e) => {
                            handleClick(e, 2);
                        }}
                    >
                        <td>Маршрут №2</td>
                    </tr>
                    <tr
                        onClick={(e) => {
                            handleClick(e, 3);
                        }}
                    >
                        <td>Маршрут №3</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export { Table };
