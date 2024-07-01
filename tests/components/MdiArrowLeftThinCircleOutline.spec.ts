
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowLeftThinCircleOutline from "../../src/components/MdiArrowLeftThinCircleOutline.vue";

test("MdiArrowLeftThinCircleOutline snapshot", () => {
  const wrapper = mount(MdiArrowLeftThinCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
