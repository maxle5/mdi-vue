
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMouseOff from "../../src/components/MdiMouseOff.vue";

test("MdiMouseOff snapshot", () => {
  const wrapper = mount(MdiMouseOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
