
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLaptopOff from "../../src/components/MdiLaptopOff.vue";

test("MdiLaptopOff snapshot", () => {
  const wrapper = mount(MdiLaptopOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
