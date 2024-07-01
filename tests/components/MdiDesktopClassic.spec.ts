
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDesktopClassic from "../../src/components/MdiDesktopClassic.vue";

test("MdiDesktopClassic snapshot", () => {
  const wrapper = mount(MdiDesktopClassic, {});
  expect(wrapper.html()).toMatchSnapshot();
});
