import RegisterForm from "@/ _components/Admin/Info/RegisterForm";


const InformationRegister = () => {
    return (
        <div className="w-full flex justify-center">
            <div className="w-[90%] h-fit my-10 bg-gray-100 rounded-xl flex justify-center">
                <div className="w-[90%]">
                    <RegisterForm infoId="register"/>
                </div>
            </div>
        </div>
    );
};

export default InformationRegister;
