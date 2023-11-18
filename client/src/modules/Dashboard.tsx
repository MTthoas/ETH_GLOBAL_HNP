import React from 'react';

interface Donation {
    id: number;
    organization: string;
    amount: number;
    date: string;
}

const donations: Donation[] = [
    { id: 1, organization: 'Charity A', amount: 50, date: '2021-01-01' },
    { id: 2, organization: 'Charity B', amount: 75, date: '2021-02-01' },
];

function Dashboard(props: any) {
    // Calculate total donations and number of donations
    const totalDonations = donations.reduce((acc, donation) => acc + donation.amount, 0);
    const numberOfDonations = donations.length;

    return (
        <div>
            <section className="mb-24 px-8">
                <div className="max-w-screen-xl px-5 mx-auto">
                    <p className="text-xl leading-6 text-gray-900 mt-12 mb-12">Dashboard</p>

                    <div className="mb-8">
                        <div className="mb-4">
                            <span className="block text-lg text-gray-700">Total Donations: </span>
                            <span className="block text-2xl text-gray-900">${totalDonations}</span>
                        </div>
                        <div className="mb-4">
                            <span className="block text-lg text-gray-700">Number of Donations: </span>
                            <span className="block text-2xl text-gray-900">{numberOfDonations}</span>
                        </div>
                    </div>

                    <div>
                        <p className="text-lg text-gray-700 mb-4">Your Donations:</p>
                        <table className="min-w-full bg-white">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 bg-gray-200 text-left text-xs text-gray-500 uppercase tracking-wider">
                                        Organization
                                    </th>
                                    <th className="py-2 px-4 bg-gray-200 text-left text-xs text-gray-500 uppercase tracking-wider">
                                        Amount
                                    </th>
                                    <th className="py-2 px-4 bg-gray-200 text-left text-xs text-gray-500 uppercase tracking-wider">
                                        Date
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {donations.map((donation) => (
                                    <tr key={donation.id}>
                                        <td className="py-2 px-4 border-b border-gray-200">{donation.organization}</td>
                                        <td className="py-2 px-4 border-b border-gray-200">${donation.amount}</td>
                                        <td className="py-2 px-4 border-b border-gray-200">{donation.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Dashboard;
