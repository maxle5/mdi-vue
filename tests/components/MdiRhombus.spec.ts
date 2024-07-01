
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRhombus from "../../src/components/MdiRhombus.vue";

test("MdiRhombus snapshot", () => {
  const wrapper = mount(MdiRhombus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
