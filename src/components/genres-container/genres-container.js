import './genres-container';
import song from '../../Don t Let Me Go - Cigarettes After Sex.mp3';

function GenreContainer() {
    return <div>
        <audio controls>
            <source src={song} type="audio/mp3" />
            Your browser does not support the audio element.
        </audio>
    </div>
};

export default GenreContainer;