import { useAppSelector } from 'store/hooks';

function HomePage() {
    const { userInfo } = useAppSelector((state: any) => state.auth);
    return (
        <div>
            <h1>Welcome to the application {userInfo?.email}</h1>
        </div>
    );
}

export default HomePage;