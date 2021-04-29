import {createField, myInput, textArea} from "../../common/FormControls/FormControls";
import {reduxForm} from "redux-form";
import styles from "../../common/FormControls/FormControls.module.css";

const ProfileDataForm = ({handleSubmit,profile,error}) => {
    return (
        <form onSubmit={handleSubmit}>
        {<div>
            <button type={"submit"}>Save
            </button>
        </div>}
            {error && <div className={styles.formSummaryError}>{error}</div>}

        <div><strong>Full name: </strong>{createField("Full name", "fullName", [], myInput)}</div>
        <div><strong>About me: </strong><i>{createField("About me", "aboutMe", [], myInput)}</i></div>
        <div>
            <strong>Looking for a job: </strong>
            <i>{createField("", "lookingForAJob", [], myInput, {type: 'checkbox'})}</i></div>
        <div>
            <strong>My professional skills: </strong>
            {createField("Looking for a job description", "lookingForAJobDescription", [], textArea)}
        </div>
        <div><strong>My contacts: </strong>
            <ul>{Object.keys(profile.contacts).map(item => {
                return <li key={item}>
                    <strong>{item}: </strong>
                    {createField(item, `contacts.${item}`, [], myInput)}
                </li>
            })}</ul>
        </div>
    </form>)
}
const ProfileDataFormRedux = reduxForm({form: 'edit-profile'})(ProfileDataForm)
export default ProfileDataFormRedux