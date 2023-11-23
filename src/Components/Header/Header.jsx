import PropTypes from 'prop-types';
import './Header.css';
const Header = ({ onSearchChange }) => {
    return (
        <header>
            <div className="titulo">Mi biblioteca Virtual</div>
            <div className="search-bar">
                <input
                    type="text "
                    placeholder="Buscar Libro...."
                    onChange={onSearchChange} />
                    <button type="button">Buscar</button>
            </div>
        </header>
    );
};
Header.propTypes={
    onSearchChange:PropTypes.func.isRequired,
};
export default Header;