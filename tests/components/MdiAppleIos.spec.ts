
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAppleIos from "../../src/components/MdiAppleIos.vue";

test("MdiAppleIos snapshot", () => {
  const wrapper = mount(MdiAppleIos, {});
  expect(wrapper.html()).toMatchSnapshot();
});
