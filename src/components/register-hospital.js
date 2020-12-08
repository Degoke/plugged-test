const RegisterHospital = ({ handleChange, handleSubmit, error }) => {
    return (
        <>
            <form id="register-hospital" method="POST" onSubmit={handleSubmit}>
                <label>
                    <input
                        type="text"
                        placeholder="Hospital Name"
                        name="hospital"
                        required
                        onChange={handleChange}
                        className='register-input'
                    ></input>
                </label>
                <label>
                    <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        required
                        onChange={handleChange}
                        className='register-input'
                    ></input>
                </label>
                <label>
                    <input
                        type="password"
                        placeholder="Create a password"
                        name="address"
                        required
                        onChange={handleChange}
                        className='register-input'
                    ></input>
                </label>
                <label>
                    <input
                        type="text"
                        placeholder="Location"
                        name="password"
                        required
                        onChange={handleChange}
                        className='register-input'
                    ></input>
                </label>
                <p className="error">{error}</p>
                <label>
                    <input type="submit" id="submitHospital" className='register-input' value="Get plugged"></input>
                </label>
            </form>
        </>
    )
}

export default RegisterHospital;