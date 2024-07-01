
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLighthouseOn from "../../src/components/MdiLighthouseOn.vue";

test("MdiLighthouseOn snapshot", () => {
  const wrapper = mount(MdiLighthouseOn, {});
  expect(wrapper.html()).toMatchSnapshot();
});
