
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlashlight from "../../src/components/MdiFlashlight.vue";

test("MdiFlashlight snapshot", () => {
  const wrapper = mount(MdiFlashlight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
