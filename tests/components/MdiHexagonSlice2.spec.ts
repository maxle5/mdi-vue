
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHexagonSlice2 from "../../src/components/MdiHexagonSlice2.vue";

test("MdiHexagonSlice2 snapshot", () => {
  const wrapper = mount(MdiHexagonSlice2, {});
  expect(wrapper.html()).toMatchSnapshot();
});
