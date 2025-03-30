import { useState } from "react";

const WaitlistSignup = () => {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="max-w-md mx-auto p-4 border rounded shadow">
            {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <label className="block">
                        Email:
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="block w-full mt-1 p-2 border rounded"
                        />
                    </label>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                        Join Waitlist
                    </button>
                </form>
            ) : (
                <p className="text-green-500">We have received your submission.</p>
            )}
        </div>
    );
};

export default WaitlistSignup;
