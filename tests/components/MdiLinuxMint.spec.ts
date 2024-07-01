
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLinuxMint from "../../src/components/MdiLinuxMint.vue";

test("MdiLinuxMint snapshot", () => {
  const wrapper = mount(MdiLinuxMint, {});
  expect(wrapper.html()).toMatchSnapshot();
});
