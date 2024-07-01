
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVariableBox from "../../src/components/MdiVariableBox.vue";

test("MdiVariableBox snapshot", () => {
  const wrapper = mount(MdiVariableBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
