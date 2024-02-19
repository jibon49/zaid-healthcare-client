import product1 from "/product4.png"

const BillingInfo = () => {
    return (
        <div className=" md:max-w-7xl flex flex-col md:flex-row justify-between mx-auto p-4 md:p-10 bg-base-200 mt-20 gap-5">
            <div>
                <h1 className="text-2xl font-bold">Billings info</h1>
                <label className="input input-bordered flex my-5 items-center gap-2">
                    আপনার নাম
                    <input type="text" className="grow" placeholder="" />
                </label>
                <label className="input input-bordered flex my-5 items-center gap-2">
                    ঠিকানা
                    <input type="text" className="grow" placeholder="" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    ফোন নাম্বার
                    <input type="text" className="grow" placeholder="" />
                </label>
            </div>

            {/* table */}
            <div className="w-full md:w-1/2">
                <h1 className="text-2xl font-bold mb-5">Product info</h1>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                </th>
                                <th>Name</th>
                                <th>Price</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-16 h-16">
                                                <img src={product1} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Hart Hagerty</div>
                                        </div>
                                    </div>
                                </td>
                                <td>1500</td>
                            </tr>
                        </tbody>
                        {/* foot */}
                        <tfoot>
                            <tr>
                                <th></th>
                                <th>Total</th>
                                <th>1500</th>
                                <th></th>

                            </tr>
                        </tfoot>

                    </table>
                </div>
                <button className="btn my-5 w-full btn-accent">অর্ডার করুন</button>
            </div>
        </div>
    );
};

export default BillingInfo;