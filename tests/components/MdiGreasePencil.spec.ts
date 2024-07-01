
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGreasePencil from "../../src/components/MdiGreasePencil.vue";

test("MdiGreasePencil snapshot", () => {
  const wrapper = mount(MdiGreasePencil, {});
  expect(wrapper.html()).toMatchSnapshot();
});
