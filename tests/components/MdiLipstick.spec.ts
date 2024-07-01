
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLipstick from "../../src/components/MdiLipstick.vue";

test("MdiLipstick snapshot", () => {
  const wrapper = mount(MdiLipstick, {});
  expect(wrapper.html()).toMatchSnapshot();
});
