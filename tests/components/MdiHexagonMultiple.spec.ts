
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHexagonMultiple from "../../src/components/MdiHexagonMultiple.vue";

test("MdiHexagonMultiple snapshot", () => {
  const wrapper = mount(MdiHexagonMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
