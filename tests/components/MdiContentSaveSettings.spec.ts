
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiContentSaveSettings from "../../src/components/MdiContentSaveSettings.vue";

test("MdiContentSaveSettings snapshot", () => {
  const wrapper = mount(MdiContentSaveSettings, {});
  expect(wrapper.html()).toMatchSnapshot();
});
