
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarEndOutline from "../../src/components/MdiCalendarEndOutline.vue";

test("MdiCalendarEndOutline snapshot", () => {
  const wrapper = mount(MdiCalendarEndOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
