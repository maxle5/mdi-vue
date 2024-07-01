
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSortClockAscendingOutline from "../../src/components/MdiSortClockAscendingOutline.vue";

test("MdiSortClockAscendingOutline snapshot", () => {
  const wrapper = mount(MdiSortClockAscendingOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
