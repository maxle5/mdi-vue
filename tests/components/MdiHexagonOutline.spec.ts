
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHexagonOutline from "../../src/components/MdiHexagonOutline.vue";

test("MdiHexagonOutline snapshot", () => {
  const wrapper = mount(MdiHexagonOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
