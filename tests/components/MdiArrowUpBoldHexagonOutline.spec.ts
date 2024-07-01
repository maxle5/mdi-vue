
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowUpBoldHexagonOutline from "../../src/components/MdiArrowUpBoldHexagonOutline.vue";

test("MdiArrowUpBoldHexagonOutline snapshot", () => {
  const wrapper = mount(MdiArrowUpBoldHexagonOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
