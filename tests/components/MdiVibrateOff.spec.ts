
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVibrateOff from "../../src/components/MdiVibrateOff.vue";

test("MdiVibrateOff snapshot", () => {
  const wrapper = mount(MdiVibrateOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
