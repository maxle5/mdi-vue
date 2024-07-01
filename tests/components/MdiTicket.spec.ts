
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTicket from "../../src/components/MdiTicket.vue";

test("MdiTicket snapshot", () => {
  const wrapper = mount(MdiTicket, {});
  expect(wrapper.html()).toMatchSnapshot();
});
