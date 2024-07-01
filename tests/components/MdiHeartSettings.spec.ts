
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeartSettings from "../../src/components/MdiHeartSettings.vue";

test("MdiHeartSettings snapshot", () => {
  const wrapper = mount(MdiHeartSettings, {});
  expect(wrapper.html()).toMatchSnapshot();
});
