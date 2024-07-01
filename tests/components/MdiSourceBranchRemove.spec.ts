
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSourceBranchRemove from "../../src/components/MdiSourceBranchRemove.vue";

test("MdiSourceBranchRemove snapshot", () => {
  const wrapper = mount(MdiSourceBranchRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
