
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSourceBranchMinus from "../../src/components/MdiSourceBranchMinus.vue";

test("MdiSourceBranchMinus snapshot", () => {
  const wrapper = mount(MdiSourceBranchMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
