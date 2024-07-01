
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSharkOff from "../../src/components/MdiSharkOff.vue";

test("MdiSharkOff snapshot", () => {
  const wrapper = mount(MdiSharkOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
