
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHexagonSlice3 from "../../src/components/MdiHexagonSlice3.vue";

test("MdiHexagonSlice3 snapshot", () => {
  const wrapper = mount(MdiHexagonSlice3, {});
  expect(wrapper.html()).toMatchSnapshot();
});
