
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMenuDown from "../../src/components/MdiMenuDown.vue";

test("MdiMenuDown snapshot", () => {
  const wrapper = mount(MdiMenuDown, {});
  expect(wrapper.html()).toMatchSnapshot();
});
