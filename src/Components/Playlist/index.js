import '../../Assets/Playlist.css';

function PlaylistForm ({handleCreatePlaylist, handleFormPlaylist}) {
    return (
        <>
        <form className='playlist-form' action="" onSubmit={handleCreatePlaylist}>
            <label htmlFor="input-name">Nama Playlist</label>
            <input id='input-name' className='input text' onChange={handleFormPlaylist} type="text" name="name" required/>
            <label htmlFor="input-desc">Deskripsi</label>
            <textarea id='input-desc' className='input textarea' onChange={handleFormPlaylist} type="textarea" name="description" minLength={10} required/>
            <input className='input submit' type="submit" value="Save Playlist" />
        </form>
        </>
    );
}

export default PlaylistForm;