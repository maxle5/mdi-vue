
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlashOff from "../../src/components/MdiFlashOff.vue";

test("MdiFlashOff snapshot", () => {
  const wrapper = mount(MdiFlashOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
