import "./loginpage.css"

export default function LoginPage() {

    return (
        <section className="login-section">
            <h1>stock</h1>
            <div className="input-section">
                <h4>Log In to Stock</h4>
                <input type="text" placeholder="username"/>
                <input type="password" placeholder="password" />
                <button>Log In</button>
            </div>
        </section>
    );
};