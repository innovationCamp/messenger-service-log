import { devInstance } from "@/api/axios";

const API = {
    signUp: async (formData: FormData) => {
        const response = await devInstance.post(
            "/user/signup",
            formData,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        ).then(res => console.log(res.data));
    }
}

export { API };