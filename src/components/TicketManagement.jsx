import React,{ use } from "react";

const TicketManagement = ({ fetchPromise }) => {
  const tickets= use(fetchPromise);

  return (
    <div className="w-[1140px] my-[50px] mx-auto flex">


      {/* Left side: Tickets */}
      <div className="w-[820px]">
        <h2 className="text-xl font-bold mb-4  pb-2">Customer Tickets</h2>
        <div className="grid grid-cols-2 gap-4">
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              onClick={() => handleSelectTicket(ticket)}
              className={`border rounded p-3 cursor-pointer shadow-sm bg-white hover:shadow-md ${
                ticket.status === "Resolved" ? "opacity-50" : ""
              }`}
            >
              <div className="flex justify-between items-center">
                <span className="font-semibold text-[15px]">{ticket.title}</span>
                <span
                  className={`px-2 py-1 text-xs rounded-[50px] ${
                    ticket.status === "Open"
                      ? "bg-green-200 text-green-800"
                      : ticket.status === "In-Progress"
                      ? "bg-yellow-200 text-yellow-800"
                      : "bg-gray-300 text-gray-700"
                  }`}
                >
                  {ticket.status}
                </span>
              </div>
              <p className="text-xs mt-[5px] text-gray-600">{ticket.description}</p>
              <div className="mt-2 text-xs text-gray-500 flex justify-between ">
                <div className="flex justify-center items-center gap-2">
                    <span className=" font-semibold text-[11px]">{ticket.id}</span>
                    <div
                className={` text-xs font-semibold ${
                  ticket.priority === "HIGH PRIORITY"
                    ? "text-red-600"
                    : ticket.priority === "MEDIUM PRIORITY"
                    ? "text-yellow-600"
                    : "text-green-600"
                }`}
              >
                {ticket.priority}
              </div>
                </div>
                <div className="flex gap-2">
                <span className="font-medium">{ticket.customer}</span>

                <span>{ticket.createdAt}</span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>


    </div>
  );
};

export default TicketManagement;
