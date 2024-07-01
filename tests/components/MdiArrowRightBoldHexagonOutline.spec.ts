
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowRightBoldHexagonOutline from "../../src/components/MdiArrowRightBoldHexagonOutline.vue";

test("MdiArrowRightBoldHexagonOutline snapshot", () => {
  const wrapper = mount(MdiArrowRightBoldHexagonOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
