"use client";

type FormInputType = {
    name: string;
    type: string;
    placeholder: string;
    defaultValue?: string;
    errors?: string[];
};

export default function FormInput({ placeholder, type, name, defaultValue, errors }: FormInputType) {
    return (
        <div className="flex flex-col gap-2 w-full">
            <input
                name={name}
                className="bg-transparent p-2  rounded-md w-full h-10 focus:outline-none ring-2 focus:ring-4 transition ring-neutral-200 focus:ring-orange-500 border-none placeholder:text-neutral-400"
                type={type}
                placeholder={placeholder}
                required
            />
            {errors &&
                errors.map((error, index) => (
                    <span key={index} className="text-red-500 font-medium">
                        {error}
                    </span>
                ))}
        </div>
    );
}
