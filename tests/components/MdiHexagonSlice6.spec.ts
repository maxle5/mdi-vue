
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHexagonSlice6 from "../../src/components/MdiHexagonSlice6.vue";

test("MdiHexagonSlice6 snapshot", () => {
  const wrapper = mount(MdiHexagonSlice6, {});
  expect(wrapper.html()).toMatchSnapshot();
});
