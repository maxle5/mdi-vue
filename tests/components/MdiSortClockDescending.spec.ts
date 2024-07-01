
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSortClockDescending from "../../src/components/MdiSortClockDescending.vue";

test("MdiSortClockDescending snapshot", () => {
  const wrapper = mount(MdiSortClockDescending, {});
  expect(wrapper.html()).toMatchSnapshot();
});
