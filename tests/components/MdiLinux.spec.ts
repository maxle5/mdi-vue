
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLinux from "../../src/components/MdiLinux.vue";

test("MdiLinux snapshot", () => {
  const wrapper = mount(MdiLinux, {});
  expect(wrapper.html()).toMatchSnapshot();
});
