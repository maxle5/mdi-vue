
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowBottomRightThinCircleOutline from "../../src/components/MdiArrowBottomRightThinCircleOutline.vue";

test("MdiArrowBottomRightThinCircleOutline snapshot", () => {
  const wrapper = mount(MdiArrowBottomRightThinCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
