
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMerge from "../../src/components/MdiMerge.vue";

test("MdiMerge snapshot", () => {
  const wrapper = mount(MdiMerge, {});
  expect(wrapper.html()).toMatchSnapshot();
});
