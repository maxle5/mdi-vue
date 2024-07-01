
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVolumeMedium from "../../src/components/MdiVolumeMedium.vue";

test("MdiVolumeMedium snapshot", () => {
  const wrapper = mount(MdiVolumeMedium, {});
  expect(wrapper.html()).toMatchSnapshot();
});
