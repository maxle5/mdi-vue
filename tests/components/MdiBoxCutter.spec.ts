
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBoxCutter from "../../src/components/MdiBoxCutter.vue";

test("MdiBoxCutter snapshot", () => {
  const wrapper = mount(MdiBoxCutter, {});
  expect(wrapper.html()).toMatchSnapshot();
});
