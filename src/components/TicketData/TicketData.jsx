import React from "react";

const TicketData = ({ tickets, taskStatus, resolvedTasks, onAddToTask, onCompleteTask }) => {
  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case "high":
        return "text-red-500 font-semibold text-[12px] md:text-sm";
      case "medium":
        return "text-yellow-500 font-semibold text-[12px] md:text-sm";
      case "low":
        return "text-green-500 font-semibold text-[12px] md:text-sm";
      default:
        return "text-gray-500 text-[12px] md:text-sm";
    }
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "open":
        return "bg-green-100 text-green-700 md:text-sm text-[12px]";
      case "in-progress":
        return "bg-yellow-100 text-yellow-700 md:text-sm text-[12px]";
      default:
        return "bg-gray-100 text-gray-700 md:text-sm text-[12px]";
    }
  };

  const getCircleColor = (status) => {
    switch (status.toLowerCase()) {
      case "open":
        return "bg-green-500";
      case "in-progress":
        return "bg-yellow-400";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <div className="bg-[#F5F5F5] min-h-screen px-6 pt-6 py-10">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Customer Tickets
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {tickets.map((ticket) => (
              <div
                key={ticket.id}
                onClick={() => onAddToTask(ticket)}
                className="cursor-pointer bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex flex-col justify-between hover:shadow-md transition-shadow duration-200"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-[16px] font-semibold text-gray-900">
                      {ticket.title}
                    </h3>
                    <span
                      className={`flex items-center text-sm px-3 py-1 rounded-full font-medium ${getStatusColor(
                        ticket.status
                      )}`}
                    >
                      <span
                        className={`w-2.5 h-2.5 rounded-full mr-1.5 ${getCircleColor(
                          ticket.status
                        )}`}
                      ></span>
                      {ticket.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                    {ticket.description}
                  </p>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
                  <p className={`${getPriorityColor(ticket.priority)}`}>
                    #{ticket.id} {ticket.priority.toUpperCase()} PRIORITY
                  </p>
                  <p className="text-gray-600">{ticket.customer}</p>
                  <div className="flex items-center space-x-1 text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span>{ticket.createdAt}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Task Status
        </h2>

        {taskStatus.length === 0 ? (
            <p className="text-gray-500 text-sm mb-6">
            Select a ticket to add to Task Status
            </p>
        ) : (
            <div className="space-y-3 mb-6">
            {taskStatus.map((task) => (
                <div
                key={task.id}
                className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
                >
                <p className="text-gray-800 font-medium text-sm mb-3">
                    {task.title}
                </p>
                <button
                    onClick={() => onCompleteTask(task)}
                    className="w-full bg-green-500 hover:bg-green-600 text-white text-sm font-semibold py-2 rounded-md transition-colors duration-150"
                >
                    Complete
                </button>
                </div>
            ))}
            </div>
        )}

        <h3 className="text-md font-semibold text-gray-800 mb-6">
            Resolved Task
        </h3>

        {resolvedTasks.length === 0 ? (
            <p className="text-gray-500 text-sm">No resolved tasks yet.</p>
        ) : (
            <ul className="space-y-2">
            {resolvedTasks.map((r) => (
                <li
                key={r.id}
                className="bg-blue-100 border border-blue-200 p-3 rounded-md text-sm text-gray-800 font-medium"
                >
                {r.title}
                </li>
            ))}
            </ul>
        )}
        </div>

      </div>
    </div>
  );
};

export default TicketData;
