
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSortClockAscending from "../../src/components/MdiSortClockAscending.vue";

test("MdiSortClockAscending snapshot", () => {
  const wrapper = mount(MdiSortClockAscending, {});
  expect(wrapper.html()).toMatchSnapshot();
});
