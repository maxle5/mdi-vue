
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiViewGrid from "../../src/components/MdiViewGrid.vue";

test("MdiViewGrid snapshot", () => {
  const wrapper = mount(MdiViewGrid, {});
  expect(wrapper.html()).toMatchSnapshot();
});
