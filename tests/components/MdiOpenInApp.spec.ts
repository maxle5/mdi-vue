
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiOpenInApp from "../../src/components/MdiOpenInApp.vue";

test("MdiOpenInApp snapshot", () => {
  const wrapper = mount(MdiOpenInApp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
