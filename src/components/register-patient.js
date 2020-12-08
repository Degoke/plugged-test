

const RegisterPatient = ({ handleChange, handleSubmit, error }) => {
    return (
        <>
            <form id="register-patient" onSubmit={handleSubmit} method="POST">
                <div className="upper">
                    <label>
                        <input
                            type="text"
                            placeholder="First Name"
                            name="firstname"
                            onChange={handleChange}
                            required
                            className='reg-pat-input'
                        ></input>
                    </label>
                    <label>
                        <input
                            type="text"
                            placeholder="Last Name"
                            name="lastname"
                            onChange={handleChange}
                            required
                            className='reg-pat-input'
                        ></input>
                    </label>
                    <label>
                        <select
                            type="text"
                            className="grey"
                            name="gender"
                            onChange={handleChange}
                            required
                            className='reg-pat-select'
                        >
                            <option value="">Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </label>
                    <div className="numbers">
                        <label>
                            <input
                                type="number"
                                placeholder="Age"
                                name="age"
                                onChange={handleChange}
                                required
                                className='reg-pat-input'
                            ></input>
                        </label>
                        <label>
                            <input
                                type="number"
                                placeholder="ht"
                                name="height"
                                onChange={handleChange}
                                required
                                className='reg-pat-input'
                            ></input>
                        </label>
                        <label>
                            <input
                                type="number"
                                placeholder="wt"
                                name="weight"
                                onChange={handleChange}
                                required
                                className='reg-pat-input'
                            ></input>
                        </label>
                    </div>
  
                    <label>
                        <select
                            type="text"
                            className="grey"
                            name="bloodgroup"
                            onChange={handleChange}
                            required
                            className='reg-pat-select'
                        >
                            <option defaultValue="">Blood Group</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                        </select>
                    </label>
                    <label>
                        <input
                            type="text"
                            placeholder="Genotype"
                            name="genotype"
                            onChange={handleChange}
                            required
                            className='reg-pat-input'
                        ></input>
                    </label>
                    <label>
                        <input
                            type="email"
                            placeholder="Email Address"
                            name="email"
                            onChange={handleChange}
                            required
                            className='reg-pat-input'
                        ></input>
                    </label>
                    <label>
                        <input
                            type="password"
                            placeholder="Create Password"
                            name="password"
                            onChange={handleChange}
                            required
                            className='reg-pat-input'
                        ></input>
                    </label>
                </div>
                <label for="file" id="label">
                    {" "}
            Upload Picture
            <input
                        type="file"
                        name="image"
                        id="file"
                        className="grey"
                        onChange={handleChange}
                    />
                </label>
                <p className="error">{error}</p>
                <label>
                    <input type="submit" id="submitPatient" value="Register" className='reg-pat-input'></input>
                </label>
            </form>
        </>
    )
}

export default RegisterPatient;