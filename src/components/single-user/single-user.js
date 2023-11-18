import './single-user.css';

function SingleUser({ img }) {
    const { imgSrc } = img;

    return <div>
        <img src={imgSrc} alt="userImgs" />
    </div>
};

export default SingleUser;