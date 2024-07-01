
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSetMerge from "../../src/components/MdiSetMerge.vue";

test("MdiSetMerge snapshot", () => {
  const wrapper = mount(MdiSetMerge, {});
  expect(wrapper.html()).toMatchSnapshot();
});
