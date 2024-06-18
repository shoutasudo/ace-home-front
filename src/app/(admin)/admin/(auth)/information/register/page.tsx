import RegisterForm from "@/ _components/Admin/Info/RegisterForm";


const InformationRegister = () => {
const domain = process.env.NEXT_PUBLIC_BACKEND_URL;

    return (
        <div className="w-full flex justify-center">
            <div className="w-[90%] h-fit my-10 bg-gray-100 rounded-xl flex justify-center">
                <div className="w-[90%]">
                    <RegisterForm domain={domain} />
                </div>
            </div>
        </div>
    );
};

export default InformationRegister;
