
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVectorArrangeAbove from "../../src/components/MdiVectorArrangeAbove.vue";

test("MdiVectorArrangeAbove snapshot", () => {
  const wrapper = mount(MdiVectorArrangeAbove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
