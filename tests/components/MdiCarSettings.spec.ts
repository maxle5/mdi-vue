
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarSettings from "../../src/components/MdiCarSettings.vue";

test("MdiCarSettings snapshot", () => {
  const wrapper = mount(MdiCarSettings, {});
  expect(wrapper.html()).toMatchSnapshot();
});
