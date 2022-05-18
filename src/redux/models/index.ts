import { Models } from "@rematch/core";
import { pricing } from "./pricing";

export interface RootModel extends Models<RootModel> {
    pricing: typeof pricing;
}
export const models: RootModel = { pricing };