

function RepoInfo({ repo }) {
    const { url, name, description, viewerSubscription } = repo
    return (<li className="list-group-item" >
        <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex flex-column">
                <a className="h5 mb-0 text-decoration-none" href={url}>
                    {name}
                </a>
                <p className="small">{description}</p>
            </div>
            <span className={"px-1 py-0 ms-1 d-inline-block btn btn-sm " + (viewerSubscription === "SUBSCRIBED" ? "btn-success" : "btn-outline-secondary")}>
                {viewerSubscription}
            </span>
        </div>

    </li>)
}

export default RepoInfo;