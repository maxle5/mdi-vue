
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTicketOutline from "../../src/components/MdiTicketOutline.vue";

test("MdiTicketOutline snapshot", () => {
  const wrapper = mount(MdiTicketOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
