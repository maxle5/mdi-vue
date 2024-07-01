
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTableRowHeight from "../../src/components/MdiTableRowHeight.vue";

test("MdiTableRowHeight snapshot", () => {
  const wrapper = mount(MdiTableRowHeight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
