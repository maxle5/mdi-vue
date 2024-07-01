
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFaceWomanOutline from "../../src/components/MdiFaceWomanOutline.vue";

test("MdiFaceWomanOutline snapshot", () => {
  const wrapper = mount(MdiFaceWomanOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
