import React from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class BootstrapCarouselComponent extends React.Component {

    render() {
        return (
            <div>
                <div className='container-fluid' >
                    <div className="row">
                        <div className="col-sm-12">
                            <h3>React Bootstrap Carousel</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-10">
                            <Carousel>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://cdn.columbiauniversitybootcamp.com/wp-content/uploads/sites/108/2021/03/CDG_blog_post_image_02-2-850x412.jpg"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Software Engineering</h3>
                                        <p>The field of computer science that deals with the design, development, testing, and maintenance of software programs is known as software engineering.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://www.securitymagazine.com/ext/resources/images/cyber-security-freepik1170x658x6.jpg?1647265825"
                                        alt="Second slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>Cyber Security</h3>
                                        <p>A cyber security administrator is usually in charge of implementing, managing, and debugging an organization's security systems.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://techgenix.com/tgwordpress/wp-content/uploads/2018/09/dba_admin.jpg"
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Database administrator</h3>
                                        <p>Database administrators and architects design and build systems to store and safeguard data such as financial records and consumer shipping details.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default BootstrapCarouselComponent;