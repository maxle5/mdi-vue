
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookSettings from "../../src/components/MdiBookSettings.vue";

test("MdiBookSettings snapshot", () => {
  const wrapper = mount(MdiBookSettings, {});
  expect(wrapper.html()).toMatchSnapshot();
});
