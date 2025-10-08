import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/CountingCard/CountingCard";
import TicketData from "./components/TicketData/TicketData";
import Footer from "./components/Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [tickets, setTickets] = useState([]);
  const [taskStatus, setTaskStatus] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);
  useEffect(() => {
    fetch("/ticket.json")
      .then((res) => res.json())
      .then((data) => setTickets(data));
  }, []);

  const handleAddToTask = (ticket) => {
    if (!taskStatus.find((t) => t.id === ticket.id)) {
      setTaskStatus([...taskStatus, ticket]);
      toast.success(`${ticket.title} added to Task Status`);
    } else {
      toast.warning("This ticket is already in Task Status");
    }
  };
  
  const handleCompleteTask = (ticket) => {
    setTaskStatus(taskStatus.filter((t) => t.id !== ticket.id));
    setResolvedTasks([...resolvedTasks, ticket]);
    setTickets(tickets.filter((t) => t.id !== ticket.id));
    toast.info(`${ticket.title} marked as Resolved`);
  };

  return (
    <>
      <Navbar />
      <Card
        inProgressCount={taskStatus.length}
        resolvedCount={resolvedTasks.length}
      />
      <TicketData
        tickets={tickets}
        taskStatus={taskStatus}
        resolvedTasks={resolvedTasks}
        onAddToTask={handleAddToTask}
        onCompleteTask={handleCompleteTask}
      />
      <Footer />
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;

document.querySelector("html").setAttribute("data-theme", "light");
