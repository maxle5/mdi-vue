
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowTopRightThinCircleOutline from "../../src/components/MdiArrowTopRightThinCircleOutline.vue";

test("MdiArrowTopRightThinCircleOutline snapshot", () => {
  const wrapper = mount(MdiArrowTopRightThinCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
