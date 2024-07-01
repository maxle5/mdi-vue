
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSourceBranchRefresh from "../../src/components/MdiSourceBranchRefresh.vue";

test("MdiSourceBranchRefresh snapshot", () => {
  const wrapper = mount(MdiSourceBranchRefresh, {});
  expect(wrapper.html()).toMatchSnapshot();
});
