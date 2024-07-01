
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSourceBranchPlus from "../../src/components/MdiSourceBranchPlus.vue";

test("MdiSourceBranchPlus snapshot", () => {
  const wrapper = mount(MdiSourceBranchPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
