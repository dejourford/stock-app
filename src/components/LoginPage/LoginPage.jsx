import "./loginpage.css"

export default function LoginPage() {

    return (
        <section className="login-section">
            <h1>stock</h1>
            <div className="input-section">
                <h4>Log In to Stock</h4>
                <div className="input-group">
                <label htmlFor="" className="input-group-title">Username</label>
                    <input type="text"/>
                </div>
                
                <div className="input-group">
                    <label htmlFor="" className="input-group-title">Password</label>
                    <input type="password"/>
                </div>
                
                <button>Log In</button>
            </div>
        </section>
    );
};