
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCircleBox from "../../src/components/MdiCircleBox.vue";

test("MdiCircleBox snapshot", () => {
  const wrapper = mount(MdiCircleBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
