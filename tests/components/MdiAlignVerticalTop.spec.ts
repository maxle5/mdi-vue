
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlignVerticalTop from "../../src/components/MdiAlignVerticalTop.vue";

test("MdiAlignVerticalTop snapshot", () => {
  const wrapper = mount(MdiAlignVerticalTop, {});
  expect(wrapper.html()).toMatchSnapshot();
});
