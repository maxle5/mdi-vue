
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiViewColumn from "../../src/components/MdiViewColumn.vue";

test("MdiViewColumn snapshot", () => {
  const wrapper = mount(MdiViewColumn, {});
  expect(wrapper.html()).toMatchSnapshot();
});
