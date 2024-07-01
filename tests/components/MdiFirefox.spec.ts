
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFirefox from "../../src/components/MdiFirefox.vue";

test("MdiFirefox snapshot", () => {
  const wrapper = mount(MdiFirefox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
