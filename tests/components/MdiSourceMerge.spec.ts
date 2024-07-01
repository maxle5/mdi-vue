
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSourceMerge from "../../src/components/MdiSourceMerge.vue";

test("MdiSourceMerge snapshot", () => {
  const wrapper = mount(MdiSourceMerge, {});
  expect(wrapper.html()).toMatchSnapshot();
});
