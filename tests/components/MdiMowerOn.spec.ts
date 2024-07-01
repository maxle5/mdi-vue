
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMowerOn from "../../src/components/MdiMowerOn.vue";

test("MdiMowerOn snapshot", () => {
  const wrapper = mount(MdiMowerOn, {});
  expect(wrapper.html()).toMatchSnapshot();
});
