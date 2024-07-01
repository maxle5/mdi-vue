
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDotsGrid from "../../src/components/MdiDotsGrid.vue";

test("MdiDotsGrid snapshot", () => {
  const wrapper = mount(MdiDotsGrid, {});
  expect(wrapper.html()).toMatchSnapshot();
});
