
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarCollapseHorizontalOutline from "../../src/components/MdiCalendarCollapseHorizontalOutline.vue";

test("MdiCalendarCollapseHorizontalOutline snapshot", () => {
  const wrapper = mount(MdiCalendarCollapseHorizontalOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
