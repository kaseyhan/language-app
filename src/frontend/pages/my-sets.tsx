import styles from '../styles/mySets.module.css'
import Head from 'next/head';
import Navbar from '../components/navbar';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { IUser } from '../types/user';
import { ISet } from '../types/set';
import Modal from '../components/modal';

export default function MySets() {
    const BASE_URL = "http://localhost:4000/api";
    const api = axios.create({ baseURL: BASE_URL });
    const currUserId = '123'

    const [isLoading,setIsLoading] = useState(true);
    const [showCreateSetModal,setShowCreateSetModal] = useState(false);
    const [sets, setSets] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const currUser = await api.get('users/'+currUserId);

                const params = {
                    "params": {
                        "where": JSON.stringify({ userId: currUser.data.data_id })
                    }
                }
                const setGet = await api.get('sets',params);
                setSets(setGet.data.data);

            } catch (error) {

            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
    }, [])

    if (isLoading) {
        return <div className={styles.pageContents}>Loading...</div>;
    } else {
        return (
            <div>
                <Head>
                    <title>My Sets</title>
                </Head>
                <Navbar />
                <div className={styles.pageContents}>
                    <div className={styles.header}>
                        <h2>My Sets</h2>
                    </div>
                    { showCreateSetModal ? (
                    <Modal title="Create Set" button="Create" onClose={() => setShowCreateSetModal(false)} show={showCreateSetModal}>
                        <div className={styles.submitButtons}>
                            <button className={styles.modalButton} onClick={() => {} }>Create Set</button>
                        </div>
                    </Modal>) 
                    : null}
                    <div className={styles.setsContainer}>
                        <div className={styles.cardGrid}>
                            {/* {sets.map((set: ISet,idx) => ( */}
                                <div className={styles.setCard}>
                                    {/* <h3>{set.name}</h3> */}
                                    <h3>Chapter 3</h3>
                                    <p>35 terms</p>
                                    <div className={styles.cardButtons1}>
                                        <button className={styles.studyButton}>Study</button>
                                    </div>
                                    <div className={styles.cardButtons2}>
                                        <button className={styles.editButton}>Edit</button>
                                        <button className={styles.deleteButton}>Delete</button>
                                    </div>
                                </div>
                            {/* ))} */}
                        </div>
                    </div>
                    <div className={styles.buttonContainer}>
                        <button className={styles.createSetButton} onClick={ () => setShowCreateSetModal(true) }>Create Set</button>
                    </div>
                </div>
            </div>
        )
    }
}