"use client";

type FormInputType = {
    placeholder: string;
    type: string;
    name: string;
    defaultValue?: string;
};

export default function FormInput({ placeholder, type, name, defaultValue }: FormInputType) {
    return (
        <input
            name={name}
            type={type}
            placeholder={placeholder}
            defaultValue={defaultValue}
            className="p-1 px-2 rounded-md border border-gray-300 text-black"
            required
        />
    );
}
