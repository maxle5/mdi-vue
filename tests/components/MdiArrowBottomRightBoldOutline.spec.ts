
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowBottomRightBoldOutline from "../../src/components/MdiArrowBottomRightBoldOutline.vue";

test("MdiArrowBottomRightBoldOutline snapshot", () => {
  const wrapper = mount(MdiArrowBottomRightBoldOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
