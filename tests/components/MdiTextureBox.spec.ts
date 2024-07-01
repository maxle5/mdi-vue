
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTextureBox from "../../src/components/MdiTextureBox.vue";

test("MdiTextureBox snapshot", () => {
  const wrapper = mount(MdiTextureBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
