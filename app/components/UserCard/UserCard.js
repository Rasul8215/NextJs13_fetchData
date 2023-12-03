import GetAllUsers from "@/app/api/Users";
import styles from "./UserCard.module.scss";

export const UserCard = async () => {
    const Users = await GetAllUsers();

    return (
        Users && <div className={styles.user_content}>
            {Users.map((data, i) => (
                <div className={styles.user_card_container}>
                    <span>{data.name}</span>
                    <span>{data.username}</span>
                    <span>{data.company.name}</span>
                    <span>{data.company.catchPhrase}</span>
                    <span>{data.phone}</span>
                    <span>{data.website}</span>
                </div>
            ))}
        </div>
    )
}