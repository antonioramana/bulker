import img from '../assets/logo.png';

export default function ApplicationLogo() {
    return (
        <span>
            <img src={img} alt="" className="w-28 md:w-48" />
        </span>
    );
}
