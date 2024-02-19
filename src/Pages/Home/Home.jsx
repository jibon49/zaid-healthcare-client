import { FaFacebookMessenger, FaWhatsapp } from 'react-icons/fa';

const Home = () => {
    return (
        <div>
            {/* <h1>This is home</h1> */}
            <div className="fixed right-4 bottom-4 z-10">
                <a href="https://www.facebook.com/alzaidhealthcare786?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="text-blue-600 rounded-full p-3 mx-2">
                    <FaFacebookMessenger size={48} />
                </a>
                <a href="whatsapp://send/?phone=8801714404312" target="_blank" rel="noopener noreferrer" className="text-green-500 w-24 rounded-full p-3 mx-2">
                    <FaWhatsapp size={48} />
                </a>
            </div>
        </div>
    );
};

export default Home;