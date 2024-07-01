
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileSettings from "../../src/components/MdiFileSettings.vue";

test("MdiFileSettings snapshot", () => {
  const wrapper = mount(MdiFileSettings, {});
  expect(wrapper.html()).toMatchSnapshot();
});
