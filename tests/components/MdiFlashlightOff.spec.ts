
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlashlightOff from "../../src/components/MdiFlashlightOff.vue";

test("MdiFlashlightOff snapshot", () => {
  const wrapper = mount(MdiFlashlightOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
