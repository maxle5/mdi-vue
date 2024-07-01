
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarRemoveOutline from "../../src/components/MdiCalendarRemoveOutline.vue";

test("MdiCalendarRemoveOutline snapshot", () => {
  const wrapper = mount(MdiCalendarRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
