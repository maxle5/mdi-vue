
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarTextOutline from "../../src/components/MdiCalendarTextOutline.vue";

test("MdiCalendarTextOutline snapshot", () => {
  const wrapper = mount(MdiCalendarTextOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
