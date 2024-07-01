
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTableSettings from "../../src/components/MdiTableSettings.vue";

test("MdiTableSettings snapshot", () => {
  const wrapper = mount(MdiTableSettings, {});
  expect(wrapper.html()).toMatchSnapshot();
});
