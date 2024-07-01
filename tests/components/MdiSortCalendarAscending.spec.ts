
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSortCalendarAscending from "../../src/components/MdiSortCalendarAscending.vue";

test("MdiSortCalendarAscending snapshot", () => {
  const wrapper = mount(MdiSortCalendarAscending, {});
  expect(wrapper.html()).toMatchSnapshot();
});
