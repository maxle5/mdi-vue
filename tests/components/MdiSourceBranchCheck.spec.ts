
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSourceBranchCheck from "../../src/components/MdiSourceBranchCheck.vue";

test("MdiSourceBranchCheck snapshot", () => {
  const wrapper = mount(MdiSourceBranchCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
