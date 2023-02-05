import React from 'react';
import styles from 'stylesheets/auth/AuthPresenter.module.css';
import LoginContainer from './login/LoginContainer';
import SignUpContainer from './signup/SignUpContainer';

function AuthPresenter(){
    return(
        <div className={styles.auth_root}>
            <div className={styles.auth_form}>
                <div className={styles.auth_form_header}>
                    <span>Header</span>
                </div>
                <div className={styles.auth_form_body}>
                    <span>body</span>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthPresenter;