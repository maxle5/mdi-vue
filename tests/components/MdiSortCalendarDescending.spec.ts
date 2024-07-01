
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSortCalendarDescending from "../../src/components/MdiSortCalendarDescending.vue";

test("MdiSortCalendarDescending snapshot", () => {
  const wrapper = mount(MdiSortCalendarDescending, {});
  expect(wrapper.html()).toMatchSnapshot();
});
