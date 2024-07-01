
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMessageSettings from "../../src/components/MdiMessageSettings.vue";

test("MdiMessageSettings snapshot", () => {
  const wrapper = mount(MdiMessageSettings, {});
  expect(wrapper.html()).toMatchSnapshot();
});
