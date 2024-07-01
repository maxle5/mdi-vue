
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowBottomLeftThinCircleOutline from "../../src/components/MdiArrowBottomLeftThinCircleOutline.vue";

test("MdiArrowBottomLeftThinCircleOutline snapshot", () => {
  const wrapper = mount(MdiArrowBottomLeftThinCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
