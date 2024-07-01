
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiContrastBox from "../../src/components/MdiContrastBox.vue";

test("MdiContrastBox snapshot", () => {
  const wrapper = mount(MdiContrastBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
