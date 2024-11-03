import './ServicePage2.scss';
import serviceItem1 from '../../assets/videos/serviceitem1.mp4';
import serviceItem2 from '../../assets/videos/serviceitem2.mp4';
import webdev from '../../assets/videos/webdevelopment.mp4';
import gamedev from '../../assets/videos/gamedev.mp4';
import digitalm from '../../assets/videos/digitalm.mp4';


const ServicePage2 = () => {
    const animFunc = (e) => {
        const { currentTarget: el, clientX: x, clientY: y } = e;
        const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
        el.style.setProperty('--posX', x - l - w / 2);
        el.style.setProperty('--posY', y - t - h / 2);
    }
    return (
        <div className='servicepage2'>
            <div className="fosoftHeader" onPointerMove={(e) => animFunc(e)} >
                <div className="fosoftHeadingContainer">
                    <div className="serviceHeadingContent">
                        <h1 style={{ color: 'white' }}>FO SOFTS</h1>
                        <h2 className='serviceHeadingFont'>Services</h2>
                        <p>Offering a wide range of cutting-edge, reliable services designed to help businesses thrive and maintain a competitive edge in today’s rapidly changing digital environment.</p>
                    </div>
                </div>
            </div>
            <div className="container" >
                <div className="fosoft">
                    <div className="serviceItem">
                        <video autoPlay loop="true" muted="true">
                            <source src={serviceItem1} type='video/mp4' />
                        </video>
                        <h3 className='serviceItemTitle'>UI/UX Design</h3>
                    </div>
                    <div className="serviceItem">
                        <video autoPlay loop="true" muted="true">
                            <source src={webdev} type='video/mp4' />
                        </video>
                        <h3 className='serviceItemTitle'>Web Development</h3>
                    </div>
                    <div className="serviceItem">
                        <video autoPlay loop="true" muted="true">
                            <source src={serviceItem2} type='video/mp4' />
                        </video>
                        <h3 className='serviceItemTitle'>App Development</h3>
                    </div>
                    <div className="serviceItem">
                        <video autoPlay loop="true" muted="true">
                            <source src={digitalm} type='video/mp4' />
                        </video>
                        <h3 className='serviceItemTitle'>Digital Marketing</h3>
                    </div>
                    <div className="serviceItem">
                        <video autoPlay loop="true" muted="true">
                            <source src={gamedev} type='video/mp4' className='mainvideo' />
                        </video>
                        <h3 className='serviceItemTitle'>Game Development</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicePage2;