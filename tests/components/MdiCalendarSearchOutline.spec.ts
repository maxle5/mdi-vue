
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarSearchOutline from "../../src/components/MdiCalendarSearchOutline.vue";

test("MdiCalendarSearchOutline snapshot", () => {
  const wrapper = mount(MdiCalendarSearchOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
