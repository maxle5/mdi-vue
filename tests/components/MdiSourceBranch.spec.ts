
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSourceBranch from "../../src/components/MdiSourceBranch.vue";

test("MdiSourceBranch snapshot", () => {
  const wrapper = mount(MdiSourceBranch, {});
  expect(wrapper.html()).toMatchSnapshot();
});
