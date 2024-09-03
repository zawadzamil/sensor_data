import { Fragment } from "react";


export default function Pagination() {
    return (
        <Fragment>
            <div className="pagination flex justify-end">
                <div className="join">
                    <button className="join-item btn bg-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M7.41 8L10.7 4.71C10.89 4.53 11 4.28 11 4C11 3.45 10.55 3 10 3C9.72 3 9.47 3.11 9.29 3.29L5.29 7.29C5.11 7.47 5 7.72 5 8C5 8.28 5.11 8.53 5.29 8.71L9.29 12.71C9.47 12.89 9.72 13 10 13C10.55 13 11 12.55 11 12C11 11.72 10.89 11.47 10.71 11.29L7.41 8Z" fill="#D8DAE5" />
                        </svg>
                    </button>
                    <button className="join-item btn bg-bg_green">1</button>
                    <button className="join-item btn bg-white">2</button>
                    <button className="join-item btn btn-disabled">...</button>
                    <button className="join-item btn bg-white">99</button>
                    <button className="join-item btn bg-white">100</button>
                    <button className="join-item btn bg-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.71 7.29L6.71 3.29C6.53 3.11 6.28 3 6 3C5.45 3 5 3.45 5 4C5 4.28 5.11 4.53 5.29 4.71L8.59 8L5.3 11.29C5.11 11.47 5 11.72 5 12C5 12.55 5.45 13 6 13C6.28 13 6.53 12.89 6.71 12.71L10.71 8.71C10.89 8.53 11 8.28 11 8C11 7.72 10.89 7.47 10.71 7.29Z" fill="#696F8C" />
                        </svg>
                    </button>
                </div>
            </div>
        </Fragment>
    )
}
