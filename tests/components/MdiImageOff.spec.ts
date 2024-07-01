
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiImageOff from "../../src/components/MdiImageOff.vue";

test("MdiImageOff snapshot", () => {
  const wrapper = mount(MdiImageOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
