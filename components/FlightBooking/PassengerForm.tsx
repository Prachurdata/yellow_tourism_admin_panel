import React from 'react';
import { useForm, Controller } from 'react-hook-form';

interface PassengerFormProps {
    flightData: any;
    onSubmit: (data: any) => void;  
}

const PassengerForm = ({ flightData, onSubmit }: PassengerFormProps) => {
    const { ADULT, CHILD, INFANT } = flightData.searchQuery.paxInfo;
    const { handleSubmit, control } = useForm();

    const getTitles = (type: 'adult' | 'child' | 'infant') => {
        return type === 'adult' ? ['Mr', 'Mrs', 'Ms'] : ['Ms', 'Master'];
    };

    const renderPassengerFields = (count: number, type: 'adult' | 'child' | 'infant') => {
        const titles = getTitles(type);

        return Array.from({ length: count }).map((_, index) => (
            <div key={`${type}-${index}`} className="border p-4 rounded-lg mb-4 bg-white shadow-sm">
                <h3 className="text-lg font-semibold mb-2">{`${type.charAt(0).toUpperCase() + type.slice(1)} ${index + 1}`}</h3>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Title</label>
                    <Controller
                        control={control}
                        name={`${type}[${index}].title`}
                        defaultValue=""
                        render={({ field }) => (
                            <select
                                {...field}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#FFCD09] focus:border-[#FFCD09] sm:text-sm"
                            >
                                {titles.map((title) => (
                                    <option key={title} value={title}>
                                        {title}
                                    </option>
                                ))}
                            </select>
                        )}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">First Name</label>
                    <Controller
                        control={control}
                        name={`${type}[${index}].firstName`}
                        defaultValue=""
                        render={({ field }) => (
                            <input
                                {...field}
                                type="text"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#FFCD09] focus:border-[#FFCD09] sm:text-sm"
                            />
                        )}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Second Name</label>
                    <Controller
                        control={control}
                        name={`${type}[${index}].secondName`}
                        defaultValue=""
                        render={({ field }) => (
                            <input
                                {...field}
                                type="text"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#FFCD09] focus:border-[#FFCD09] sm:text-sm"
                            />
                        )}
                    />
                </div>
            </div>
        ));
    };

    return (
        <section className="max-w-4xl mx-auto p-6 bg-gray-100 shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Passenger Details</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {renderPassengerFields(ADULT, 'adult')}
                {renderPassengerFields(CHILD, 'child')}
                {renderPassengerFields(INFANT, 'infant')}
                <button
                    type="submit"
                    className="w-full bg-[#FFCD09] text-black py-2 px-4 rounded-lg hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFCD09]"
                >
                    Submit
                </button>
            </form>
        </section>
    );
};

export default PassengerForm;
