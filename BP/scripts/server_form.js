import { world } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";

const form1 = new ActionFormData()
    .title("Form Template")
    .body("説明")
    .button("Button1")
    .button("Button2")
    .button("Button3");

