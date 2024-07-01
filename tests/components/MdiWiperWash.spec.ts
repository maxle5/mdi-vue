
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWiperWash from "../../src/components/MdiWiperWash.vue";

test("MdiWiperWash snapshot", () => {
  const wrapper = mount(MdiWiperWash, {});
  expect(wrapper.html()).toMatchSnapshot();
});
