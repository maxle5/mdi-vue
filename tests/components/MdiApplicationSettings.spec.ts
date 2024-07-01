
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiApplicationSettings from "../../src/components/MdiApplicationSettings.vue";

test("MdiApplicationSettings snapshot", () => {
  const wrapper = mount(MdiApplicationSettings, {});
  expect(wrapper.html()).toMatchSnapshot();
});
