import BaseButton from "./BaseButton";

function Contenu2Concert({ handleSubmit, name, setName, email, setEmail }) {
    return (
        <form onSubmit={handleSubmit} className="space-y-4 text-center">
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Votre nom"
                required
                className="mt-1 block w-full sm:w-2/3 md:w-1/2 lg:w-1/3 mx-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-customcolor1 focus:ring-1 focus:ring-blue-500"
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre email"
                required
                className="mt-1 block w-full sm:w-2/3 md:w-1/2 lg:w-1/3 mx-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-customcolor1 focus:ring-1 focus:ring-blue-500"
            />
            <BaseButton styling={"tree"} type="submit">
                Participer
             </BaseButton>
        </form>
    );
}

export default Contenu2Concert;