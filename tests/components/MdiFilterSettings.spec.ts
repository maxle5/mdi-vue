
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFilterSettings from "../../src/components/MdiFilterSettings.vue";

test("MdiFilterSettings snapshot", () => {
  const wrapper = mount(MdiFilterSettings, {});
  expect(wrapper.html()).toMatchSnapshot();
});
