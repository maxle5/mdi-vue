
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHexagonSlice4 from "../../src/components/MdiHexagonSlice4.vue";

test("MdiHexagonSlice4 snapshot", () => {
  const wrapper = mount(MdiHexagonSlice4, {});
  expect(wrapper.html()).toMatchSnapshot();
});
