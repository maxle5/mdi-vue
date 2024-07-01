
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowLeftBoldHexagonOutline from "../../src/components/MdiArrowLeftBoldHexagonOutline.vue";

test("MdiArrowLeftBoldHexagonOutline snapshot", () => {
  const wrapper = mount(MdiArrowLeftBoldHexagonOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
