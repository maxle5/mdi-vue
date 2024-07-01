
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGrid from "../../src/components/MdiGrid.vue";

test("MdiGrid snapshot", () => {
  const wrapper = mount(MdiGrid, {});
  expect(wrapper.html()).toMatchSnapshot();
});
