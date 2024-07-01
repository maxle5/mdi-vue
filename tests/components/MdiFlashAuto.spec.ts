
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlashAuto from "../../src/components/MdiFlashAuto.vue";

test("MdiFlashAuto snapshot", () => {
  const wrapper = mount(MdiFlashAuto, {});
  expect(wrapper.html()).toMatchSnapshot();
});
