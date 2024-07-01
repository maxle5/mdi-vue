
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowDownBoldHexagonOutline from "../../src/components/MdiArrowDownBoldHexagonOutline.vue";

test("MdiArrowDownBoldHexagonOutline snapshot", () => {
  const wrapper = mount(MdiArrowDownBoldHexagonOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
