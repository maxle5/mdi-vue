
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTicketPercent from "../../src/components/MdiTicketPercent.vue";

test("MdiTicketPercent snapshot", () => {
  const wrapper = mount(MdiTicketPercent, {});
  expect(wrapper.html()).toMatchSnapshot();
});
