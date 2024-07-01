
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiApplicationVariableOutline from "../../src/components/MdiApplicationVariableOutline.vue";

test("MdiApplicationVariableOutline snapshot", () => {
  const wrapper = mount(MdiApplicationVariableOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
