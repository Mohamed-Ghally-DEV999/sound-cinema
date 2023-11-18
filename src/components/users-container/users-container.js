import './users-container.css';
import firstImg from '../../assets/imgs/p1.png';
import secondImg from '../../assets/imgs/p2.png';
import thirdImg from '../../assets/imgs/p3.png';
import fourthImg from '../../assets/imgs/p4.png';
import SingleUser from '../single-user/single-user';
import LinkManager from '../link-manager/link-manager';

function UsersContainer() {
    const userImgs = [
        {
            "id": 1,
            "title": "hats",
            "imgSrc": firstImg
        },
        {
            "id": 2,
            "title": "jackets",
            "imgSrc": secondImg
        },
        {
            "id": 3,
            "title": "sneakers",
            "imgSrc": thirdImg
        },
        {
            "id": 4,
            "title": "womens",
            "imgSrc": fourthImg
        },
    ];

    const renderedUsers = userImgs.map((img) => {
        img.path = "/MainScreen";

        return <LinkManager
            key={img.id}
            to={img.path}
            className="mb-3"
            activeClassName="font-bold border-l-4 border-blue-500 pl-2">
            <SingleUser key={img.id} img={img} />
        </LinkManager>;
    })

    return (
        <div className="box">
            <h2>Choose a profile</h2>
            {renderedUsers}
        </div>
    )
};

export default UsersContainer;