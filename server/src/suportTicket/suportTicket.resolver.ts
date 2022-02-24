import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { SuportTicketResolverBase } from "./base/suportTicket.resolver.base";
import { SuportTicket } from "./base/SuportTicket";
import { SuportTicketService } from "./suportTicket.service";

@graphql.Resolver(() => SuportTicket)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SuportTicketResolver extends SuportTicketResolverBase {
  constructor(
    protected readonly service: SuportTicketService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
