
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarPlusOutline from "../../src/components/MdiCalendarPlusOutline.vue";

test("MdiCalendarPlusOutline snapshot", () => {
  const wrapper = mount(MdiCalendarPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
