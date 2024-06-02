import { action, computed, makeObservable, observable, autorun, runInAction, get } from "mobx";

class UserMobXStore {

    userinfo = {
        id: 'C117',
        name: 'code',
        subject: ['English', 'CS', 'Maths']
    }

    constructor() {
        makeObservable(this, {
            userinfo: observable,
            totalSubjects: computed,
            updateUser: action,
            addSubject: action
        });
        autorun(this.logUserDetails)    //WILL RUN AFTER EVERY ACTION INVOKE
        runInAction(this.prefetchData)
    }

    get totalSubjects() {
        return this.userinfo.subject.length
    }

    //Actions Function
    updateUser = (name) => {
        this.userinfo.name = name;
    }
    addSubject = (data) => {
        this.userinfo.subject = [...this.userinfo.subject, data]
    }

    //autoRun Function
    logUserDetails = () => {
        console.log('Subject length us: ' + this.totalSubjects);
    }

    //runInAction Function
    prefetchData = () => {
        console.log('run in action');
    }
}

export default UserMobXStore;