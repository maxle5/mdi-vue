
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowRightThinCircleOutline from "../../src/components/MdiArrowRightThinCircleOutline.vue";

test("MdiArrowRightThinCircleOutline snapshot", () => {
  const wrapper = mount(MdiArrowRightThinCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
