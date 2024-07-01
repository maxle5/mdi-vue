
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSortClockDescendingOutline from "../../src/components/MdiSortClockDescendingOutline.vue";

test("MdiSortClockDescendingOutline snapshot", () => {
  const wrapper = mount(MdiSortClockDescendingOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
