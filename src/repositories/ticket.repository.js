// import CrudRepository from "./crud.repository.js";
// import Airplane from "../models/airplane.js";

const CrudRepository = require("./crud.repository");
const { Ticket } = require("../models");

class TicketRepository extends CrudRepository {
  constructor() {
    // super keyword help to call constructor of parents call
    super(Ticket);
  }

  async getPendingTickets() {
    const response = await Ticket.findAll({
      where: {
        status: 'PENDING'
      }
    });
    return response;
  }
}

module.exports = TicketRepository;
