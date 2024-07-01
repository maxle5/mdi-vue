
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTicketAccount from "../../src/components/MdiTicketAccount.vue";

test("MdiTicketAccount snapshot", () => {
  const wrapper = mount(MdiTicketAccount, {});
  expect(wrapper.html()).toMatchSnapshot();
});
