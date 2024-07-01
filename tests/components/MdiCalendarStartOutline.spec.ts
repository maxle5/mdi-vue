
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarStartOutline from "../../src/components/MdiCalendarStartOutline.vue";

test("MdiCalendarStartOutline snapshot", () => {
  const wrapper = mount(MdiCalendarStartOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
