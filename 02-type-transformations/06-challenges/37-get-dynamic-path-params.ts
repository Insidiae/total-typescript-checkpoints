import { S } from "ts-toolbelt";

type UserPath = "/users/:id";

type UserOrganisationPath = "/users/:id/organisations/:organisationId";

type ExtractPathParams<TPath extends string> = {
	[Route in S.Split<TPath, "/">[number] as Route extends `:${infer Param}`
		? Param
		: never]: string;
};

type Example1 = ExtractPathParams<UserPath>;

type Example2 = ExtractPathParams<UserOrganisationPath>;
