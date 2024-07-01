
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiViewSplitVertical from "../../src/components/MdiViewSplitVertical.vue";

test("MdiViewSplitVertical snapshot", () => {
  const wrapper = mount(MdiViewSplitVertical, {});
  expect(wrapper.html()).toMatchSnapshot();
});
