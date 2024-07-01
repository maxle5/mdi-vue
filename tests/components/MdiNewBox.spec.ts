
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNewBox from "../../src/components/MdiNewBox.vue";

test("MdiNewBox snapshot", () => {
  const wrapper = mount(MdiNewBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
