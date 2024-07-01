
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTicketConfirmation from "../../src/components/MdiTicketConfirmation.vue";

test("MdiTicketConfirmation snapshot", () => {
  const wrapper = mount(MdiTicketConfirmation, {});
  expect(wrapper.html()).toMatchSnapshot();
});
