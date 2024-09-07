import AuthContextProvider from "@/contexts/AuthContextProvider";

const providers = [
    AuthContextProvider,
];

const ProviderInjection = ({ children }) => {
    return providers.reduce((acc, Provider) => {
        if (!Provider) {
            console.error("Encountered undefined provider in ProviderInjection");
            return acc; 
        }
        return <Provider>{acc}</Provider>;
    }, children);
};

export default ProviderInjection;