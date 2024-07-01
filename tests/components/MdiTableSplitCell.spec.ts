
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTableSplitCell from "../../src/components/MdiTableSplitCell.vue";

test("MdiTableSplitCell snapshot", () => {
  const wrapper = mount(MdiTableSplitCell, {});
  expect(wrapper.html()).toMatchSnapshot();
});
