
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMagnetOn from "../../src/components/MdiMagnetOn.vue";

test("MdiMagnetOn snapshot", () => {
  const wrapper = mount(MdiMagnetOn, {});
  expect(wrapper.html()).toMatchSnapshot();
});
