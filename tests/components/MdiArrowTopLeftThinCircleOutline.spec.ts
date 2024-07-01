
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowTopLeftThinCircleOutline from "../../src/components/MdiArrowTopLeftThinCircleOutline.vue";

test("MdiArrowTopLeftThinCircleOutline snapshot", () => {
  const wrapper = mount(MdiArrowTopLeftThinCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
