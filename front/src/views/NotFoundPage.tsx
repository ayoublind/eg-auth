import useDocumentTitle from 'hooks/useDocumentTitle';

import './style.css';

function NotFoundPage(props: any) {
    useDocumentTitle(props.title);

    return (
        <div className="container">
            <div className="gif">
                <img src="https://i.postimg.cc/2yrFyxKv/giphy.gif" alt="gif_ing" />
            </div>
            <div className="content">
                <h1 className="main-heading">This page is gone.</h1>
                <p>...maybe the page you are looking for is not found or never existed.</p>
                <a href="/">
                    <button>
                        Back to home <i className="far fa-hand-point-right"></i>
                    </button>
                </a>
            </div>
        </div>
    );
}

export default NotFoundPage;
