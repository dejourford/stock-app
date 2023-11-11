import "./loginpage.css"

export default function LoginPage() {

    return (
        <section className="login-section">
            <h1>stock</h1>
            <div className="input-section">
                <input type="text" placeholder="username"/>
                <input type="password" placeholder="password" />
            </div>
        </section>
    );
};