import { useState } from "react"

export function TwitterFollowCard({ children, userName, initialIsfollowing }) {
    const [isFollowing, setIsFollowing] = useState(initialIsfollowing)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing 
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    alt="El avatar de un Hombre"
                    src={`https://unavatar.io/${ userName }`} />
                <div className='tw-followCard-info'>
                    <strong>{ children }</strong>
                    <span className='tw-followCard-infoUserName'>@{ userName }</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    { text }
                </button>
            </aside>
        </article>
    )
}