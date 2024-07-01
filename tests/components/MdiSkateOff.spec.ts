
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSkateOff from "../../src/components/MdiSkateOff.vue";

test("MdiSkateOff snapshot", () => {
  const wrapper = mount(MdiSkateOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
