
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGiftOff from "../../src/components/MdiGiftOff.vue";

test("MdiGiftOff snapshot", () => {
  const wrapper = mount(MdiGiftOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
