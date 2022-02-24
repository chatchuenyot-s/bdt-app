import { Module } from "@nestjs/common";
import { SuportTicketModuleBase } from "./base/suportTicket.module.base";
import { SuportTicketService } from "./suportTicket.service";
import { SuportTicketController } from "./suportTicket.controller";
import { SuportTicketResolver } from "./suportTicket.resolver";

@Module({
  imports: [SuportTicketModuleBase],
  controllers: [SuportTicketController],
  providers: [SuportTicketService, SuportTicketResolver],
  exports: [SuportTicketService],
})
export class SuportTicketModule {}
