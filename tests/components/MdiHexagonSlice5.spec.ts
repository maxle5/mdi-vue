
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHexagonSlice5 from "../../src/components/MdiHexagonSlice5.vue";

test("MdiHexagonSlice5 snapshot", () => {
  const wrapper = mount(MdiHexagonSlice5, {});
  expect(wrapper.html()).toMatchSnapshot();
});
