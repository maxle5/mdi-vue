
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSourceBranchSync from "../../src/components/MdiSourceBranchSync.vue";

test("MdiSourceBranchSync snapshot", () => {
  const wrapper = mount(MdiSourceBranchSync, {});
  expect(wrapper.html()).toMatchSnapshot();
});
