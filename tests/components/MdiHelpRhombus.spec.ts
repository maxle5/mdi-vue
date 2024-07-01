
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHelpRhombus from "../../src/components/MdiHelpRhombus.vue";

test("MdiHelpRhombus snapshot", () => {
  const wrapper = mount(MdiHelpRhombus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
