
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarOutline from "../../src/components/MdiCalendarOutline.vue";

test("MdiCalendarOutline snapshot", () => {
  const wrapper = mount(MdiCalendarOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
