
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiApiOff from "../../src/components/MdiApiOff.vue";

test("MdiApiOff snapshot", () => {
  const wrapper = mount(MdiApiOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
