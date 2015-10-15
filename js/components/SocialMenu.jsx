import React from 'react';
import ReactDom from 'react-dom';

export default class SocialMenu extends React.Component {

    render() {
        return (
            <div className="social-menu">
                <ul className="social-menu-list">
                    <li>
                        <a href="https://medium.com/@kirbdee">
                            <i className="fa fa-medium" ></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/kirbydomingo">
                            <i className="fa fa-linkedin" ></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/kirbdee">
                            <i className="fa fa-github" ></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://dribbble.com/kirbdee">
                            <i className="fa fa-dribbble" ></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com/kirbdee">
                            <i className="fa fa-instagram" ></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/kirbdee">
                            <i className="fa fa-twitter" ></i>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:kirby.domingo@gmail.com.com?Subject=Hello!">
                            <i className="fa fa-envelope-o" ></i>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}
