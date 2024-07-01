
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowBottomRightThick from "../../src/components/MdiArrowBottomRightThick.vue";

test("MdiArrowBottomRightThick snapshot", () => {
  const wrapper = mount(MdiArrowBottomRightThick, {});
  expect(wrapper.html()).toMatchSnapshot();
});
