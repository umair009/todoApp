import React from 'react'
import { observer } from 'mobx-react-lite';

const Home = ({ store }) => {
    function changeName() {
        store.updateUser('Umair Ashraf')
    }
    function addSubject() {
        store.addSubject('Physic')

    }
    return (
        <><div style={{ textAlign: 'center' }}>
            <h1>this is umair</h1>
            <h1>{store.userinfo.name} - {store.userinfo.id}</h1>
            <button className='btn btn-primary' onClick={changeName}>Update Name</button><br /><br />
            <button className='btn btn-primary' onClick={addSubject}>Add Subject</button>
            <div>
                {store.userinfo.subject.map((item, index) => {
                    return <p key={index}>{item}</p>
                })}
            </div>
        </div>
        </>
    )
}

export default observer(Home);
