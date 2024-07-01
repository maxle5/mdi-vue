
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHighDefinition from "../../src/components/MdiHighDefinition.vue";

test("MdiHighDefinition snapshot", () => {
  const wrapper = mount(MdiHighDefinition, {});
  expect(wrapper.html()).toMatchSnapshot();
});
