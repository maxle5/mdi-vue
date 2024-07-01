
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHighDefinitionBox from "../../src/components/MdiHighDefinitionBox.vue";

test("MdiHighDefinitionBox snapshot", () => {
  const wrapper = mount(MdiHighDefinitionBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
