
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowBottomRightBoldBoxOutline from "../../src/components/MdiArrowBottomRightBoldBoxOutline.vue";

test("MdiArrowBottomRightBoldBoxOutline snapshot", () => {
  const wrapper = mount(MdiArrowBottomRightBoldBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
