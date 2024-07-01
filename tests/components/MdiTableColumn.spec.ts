
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTableColumn from "../../src/components/MdiTableColumn.vue";

test("MdiTableColumn snapshot", () => {
  const wrapper = mount(MdiTableColumn, {});
  expect(wrapper.html()).toMatchSnapshot();
});
