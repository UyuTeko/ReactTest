export function Menu(props) {
    return (
        <nav className='main-menu'>
            <ul>
                <li 
                onClick={() => props.onPageChange('home')} 
                className={`menu-item ${ props.currentPage === 'home' ? 'active' : '' }`}
                >
                    ホーム
                </li>
                <li onClick={() => props.onPageChange('profile')}
                className={`menu-item ${ props.currentPage === 'profile' ? 'active' : '' }`}
                >
                    自己紹介
                </li>
            </ul>
        </nav>
    );
}