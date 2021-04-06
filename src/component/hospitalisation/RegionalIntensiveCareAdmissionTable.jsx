function RegionalIntensiveCareAdmissionTable(props) {
    const {admissions} = props;

    if (admissions.length === 0) {
        return (
            <p>
                Pas de données pour cette région.
            </p>
        )
    }

    return (
        <>
        <div className={"py-4"}>
            <h1>Tableau</h1>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>
                        Code
                    </th>
                    <th>
                        Région
                    </th>
                    <th>
                        Date
                    </th>
                    <th>
                        Admissions en réanimation
                    </th>
                </tr>

                </thead>
                <tbody>
                {
                    admissions.map((item) =>
                        <tr key={item.id}>
                            <td>
                                {item.region.regionCode}
                            </td>
                            <td>
                                {item.region.regionName}
                            </td>
                            <td>
                                {item.noticeDate}
                            </td>
                            <td>
                                {item.intensiveCareAdmissionCount}
                            </td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
        </>
    );
}

export default RegionalIntensiveCareAdmissionTable;