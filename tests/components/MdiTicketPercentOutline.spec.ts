
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTicketPercentOutline from "../../src/components/MdiTicketPercentOutline.vue";

test("MdiTicketPercentOutline snapshot", () => {
  const wrapper = mount(MdiTicketPercentOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
