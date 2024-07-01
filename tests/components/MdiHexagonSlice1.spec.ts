
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHexagonSlice1 from "../../src/components/MdiHexagonSlice1.vue";

test("MdiHexagonSlice1 snapshot", () => {
  const wrapper = mount(MdiHexagonSlice1, {});
  expect(wrapper.html()).toMatchSnapshot();
});
