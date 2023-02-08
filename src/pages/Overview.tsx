import Layout from "../components/Layout";
import divider from "../assets/svg/divider.svg";
import add from "../assets/svg/add.svg";
import chevronRight from "../assets/svg/chevronRight.svg";
import chevronRightW from "../assets/svg/chevronRightW.svg";
import plusCircle from "../assets/svg/plusCircle.svg";
import activeBar from "../assets/svg/activeBar.svg";
import calender from "../assets/svg/calendar.svg";
import waveSvg from "../assets/svg/wave.svg";
import indicatorUp from "../assets/svg/indicator-down.svg";
import { data } from "../assets/data";

interface CardProps {
  bg: string;
  country: "Nigeria" | "USA";
}

const statusStyle = (status: string) => {
  return status === "Completed"
    ? "text-green-400 bg-green-100"
    : status === "Pending"
    ? "text-amber-400 bg-amber-100"
    : "";
};

const Overview = () => {
  return (
    <Layout>
      <h2 className='font-semibold text-3xl'>Overview</h2>
      <div className='flex flex-col md:flex-row gap-5 mt-5'>
        <div className='bg-white py-4 px-5 w-full md:w-3/5 rounded-[4px] space-y-3'>
          <div
            className='dark-blue text-white rounded-md flex items-center
           px-3 md:px-5 h-24 w-full justify-between relative'>
            <img
              className='absolute z-30 right-0 bottom-1 h-20 w-7/12'
              alt=''
              src={waveSvg}
            />
            <div>
              <div className='flex gap-1 items-center'>
                <img alt='' src={calender} />
                <p className='text-[11px] w-24 md:w-full'>
                  Friday 22nd, October 2022
                </p>
              </div>
              <h2 className='text-lg md:text-2xl font-semibold'>
                Good Evening
              </h2>
            </div>
            <button
              className='bg-green-300 z-40 hover:bg-opacity-90 
             text-sm py-2 px-1 md:p-3 rounded-[4px] flex items-center gap-1 mb-3'>
              <img alt='' src={plusCircle} />
              <p>Create New Wallet</p>
            </button>
          </div>
          <div className='flex justify-between pt-4'>
            <h3 className='font-semibold'>Wallets</h3>
            <button
              className='inline-flex items-center gap-2 text-lg group hover:text-green-500
             text-green-300 font-semibold'>
              <img
                alt=''
                src={add}
                className='rounded-full ring-1 ring-green-300 group-hover:ring-green-500'
              />
              <p>Fund wallet</p>
            </button>
          </div>
          <div className='overflow-x-auto w-full flex'>
            <div className='flex gap-3 '>
              <Card bg='bg-neutral-200' country='Nigeria' />
              <Card bg='bg-amber-100' country='USA' />
              <Card bg='bg-neutral-200' country='USA' />
            </div>
          </div>

          <div className='flex justify-between py-4 items-center'>
            <h3 className='text-lg md:text-2xl font-bold'>
              Transaction Records
            </h3>
            <button
              className='inline-flex items-center text-blue-600 text-[12px] hover:opacity-75
             md:text-sm gap-2 '>
              <p>See All Transactions</p>
              <img alt='' src={chevronRight} />
            </button>
          </div>

          <table className='w-full'>
            <thead>
              <tr>
                <th />
                <th>Reference</th>
                <th>Amount</th>
                {/* <th>Description</th> */}
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              {data.map((row) => (
                <>
                  <tr
                    key={row.id}
                    className='text-sm text-neutral-500 md:hidden'>
                    <td>
                      <img
                        alt='indicator'
                        src={indicatorUp}
                        className='w-8 h-8 my-3'
                      />
                    </td>
                    <td className='text-black text-[15px]'>
                      {row.ref.slice(5)}
                    </td>
                    <td>{row.amount}</td>
                    {/* <td>{limitText(row.description, 10)}</td> */}
                    <td>{row.date.slice(7)}</td>
                    <td>
                      <button
                        className={`${statusStyle(
                          row.status
                        )} w-full h-7 px-1 rounded-md text-[13px]`}>
                        {row.status}
                      </button>
                    </td>
                  </tr>
                  <tr
                    key={row.id}
                    className='text-sm text-neutral-500 hidden md:table-row'>
                    <td>
                      <img
                        alt='indicator'
                        src={indicatorUp}
                        className='w-8 h-8 my-3'
                      />
                    </td>
                    <td className='text-black text-[15px]'>{row.ref}</td>
                    <td>{row.amount}</td>
                    <td>{row.description}</td>
                    <td>{row.date}</td>
                    <td>
                      <button
                        className={`${statusStyle(
                          row.status
                        )} w-full h-8 px-2 rounded-md text-[13px]`}>
                        {row.status}
                      </button>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>

        <div className='bg-white p-6 w-full md:w-2/5 rounded-[4px] space-y-3'>
          <h3 className='text-xl md:text-2xl font-semibold'>Savings</h3>
          <div className='rounded-xl border border-neutral-200 p-5 space-y-3'>
            <div className='flex items-center gap-2'>
              <img alt='' src='/piggy.png' />
              <p>Gold Savings</p>
            </div>
            <div className='flex gap-4 items-center pb-2'>
              <p className='text-2xl font-medium'>567.8744</p>
              <p>$135,25</p>
            </div>
            <button className='flex items-center gap-2 bg-green-300 rounded-md p-3 hover:opacity-75 text-white mx-auto'>
              <p>View Savings</p>
              <img alt='' src={chevronRightW} />
            </button>
          </div>

          <h2 className='text-2xl font-semibold pt-4'>Real-time Assistant</h2>

          <div className='flex text-lg px-4 gap-10'>
            <button className='text-blue-900 hover:opacity-70'>
              <h2>On-going Tx</h2>
              <img alt='' src={activeBar} />
            </button>
            <button className='hover:text-blue-900 hover:opacity-70'>
              Authorize Tx
            </button>
          </div>

          <div className='border-b border-b-neutral-100 p-2'>
            <div className='flex justify-between items-center'>
              <h3 className='font-semibold text-xl'>$1000</h3>
              <div className='w-3 h-3 bg-red-400 rounded-full' />
            </div>
            <p className='text-neutral-700 leading-3'>Processing</p>
          </div>

          <div className='border-b border-b-neutral-100 p-2'>
            <div className='flex justify-between items-center'>
              <h3 className='font-semibold text-xl'>$1000</h3>
              <div className='w-3 h-3 bg-green-400 rounded-full' />
            </div>
            <p className='text-neutral-700 leading-3 text-[15px]'>Processing</p>
          </div>

          <div className='border-b border-b-neutral-100 p-2'>
            <div className='flex justify-between items-center'>
              <h3 className='font-semibold text-xl'>$1000</h3>
              <div className='w-3 h-3 bg-green-400 rounded-full' />
            </div>
            <p className='text-neutral-700 leading-3 text-[15px]'>Processing</p>
          </div>

          <div className='border-b border-b-neutral-100 p-1'>
            <div className='flex justify-between items-center'>
              <h3 className='font-semibold text-xl'>$1000</h3>
              <div className='w-3 h-3 bg-green-400 rounded-full' />
            </div>
            <p className='text-neutral-700 leading-3 text-[15px]'>Processing</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const Card = ({ bg, country }: CardProps) => {
  const currencyImg = country === "Nigeria" ? "naira" : "United States";
  return (
    <div
      className={`rounded-2xl p-4 ${bg} w-60 h-56 flex flex-col justify-between drop-shadow-xl`}>
      <div className='flex items-end gap-1'>
        <img alt='' src='tether.png' />
        <p>$548</p>
        <p className='text-sm text-neutral-500'>USDT</p>
      </div>
      <img alt='' src={divider} />
      <div>
        <p className='text-neutral-400'>Balance</p>
        <p className='text-[22px] font-semibold'>₦ 5,000,048</p>
      </div>
      <div className='flex gap-2 items-center mb-3'>
        <img alt='' src={`/${currencyImg}.png`} className='h-4' />
        <p>{country}</p>
      </div>
    </div>
  );
};

export default Overview;
