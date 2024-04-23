import "./SignIn.css"
import React from "react";
import { useForm } from "react-hook-form"

function SignIn(){

    const { register, watch, formState: { errors }, handleSubmit } = useForm({});

    const onSubmit = (data) => {
        console.log(data)
    }

    const userWatch = watch("username")
    const passWatch = watch("password")

    function isComplete() {
        if(userWatch && passWatch){
            return true
        } else {
            return false
        }
    }

    return(
        <>  
            <section className="container-signin">
                
                <h1 className="welcome">Bienvenid@!</h1>

                <p></p>

                <form className="form-signin" onSubmit = {handleSubmit(onSubmit)}>
                    
                    <div className="container-inputs-signin">
                        <label className={userWatch?"text-signin-after":"text-signin"}>Usuario</label>
                        <input className="input-signin" type ="text" name="user" {...register("username", {
                            required: true,
                            maxLength: 30,
                        })}/>
                        {errors.username?.type === 'required' && <p className="error-form">No colocaste el usuario!</p>}
                        {errors.username?.type === 'maxLength' && <p className="error-form">El usuario es demasiado largo!</p>}
                    </div>
                    
                    <div className="container-inputs-signin">
                        <label className={passWatch?"text-signin-after":"text-signin"}>Contraseña</label>
                        <input className="input-signin" type ="password" name="user"{...register("password", {
                            required: true,
                            maxLength: 30,
                        })}/>
                        {errors.password?.type === "required" && <p className="error-form">Se te olvido poner la contraseña!</p>}
                        {errors.password?.type === "maxLength" && <p className="error-form">las contraseñas no son tan largas!</p>}
                    </div>
                    
                    <div className="container-button">
                        <input className={isComplete()?"button-signin":"button-signin-none"} type="submit" value="ingresar"/>
                    </div>
                
                </form>
            </section>
        </>
    )
}

export default SignIn;