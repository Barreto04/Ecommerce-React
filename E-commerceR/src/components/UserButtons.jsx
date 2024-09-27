import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';

const UserButtons =() => {
    return (
        <div>
            <button>
                <FontAwesomeIcon icon={faCartShopping}/>
            </button>
            <a>
                <FontAwesomeIcon className='px-2' icon={faUser} />
            </a>
        </div>
    )
}

export default UserButtons;