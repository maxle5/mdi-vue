
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDialpad from "../../src/components/MdiDialpad.vue";

test("MdiDialpad snapshot", () => {
  const wrapper = mount(MdiDialpad, {});
  expect(wrapper.html()).toMatchSnapshot();
});
