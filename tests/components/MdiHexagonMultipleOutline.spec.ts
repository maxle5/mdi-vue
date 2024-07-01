
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHexagonMultipleOutline from "../../src/components/MdiHexagonMultipleOutline.vue";

test("MdiHexagonMultipleOutline snapshot", () => {
  const wrapper = mount(MdiHexagonMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
