
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMicrosoftWindowsClassic from "../../src/components/MdiMicrosoftWindowsClassic.vue";

test("MdiMicrosoftWindowsClassic snapshot", () => {
  const wrapper = mount(MdiMicrosoftWindowsClassic, {});
  expect(wrapper.html()).toMatchSnapshot();
});
