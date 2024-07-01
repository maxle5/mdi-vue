
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVolumeMinus from "../../src/components/MdiVolumeMinus.vue";

test("MdiVolumeMinus snapshot", () => {
  const wrapper = mount(MdiVolumeMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
