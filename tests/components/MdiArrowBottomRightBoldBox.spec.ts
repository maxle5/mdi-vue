
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowBottomRightBoldBox from "../../src/components/MdiArrowBottomRightBoldBox.vue";

test("MdiArrowBottomRightBoldBox snapshot", () => {
  const wrapper = mount(MdiArrowBottomRightBoldBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
