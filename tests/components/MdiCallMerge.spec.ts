
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCallMerge from "../../src/components/MdiCallMerge.vue";

test("MdiCallMerge snapshot", () => {
  const wrapper = mount(MdiCallMerge, {});
  expect(wrapper.html()).toMatchSnapshot();
});
