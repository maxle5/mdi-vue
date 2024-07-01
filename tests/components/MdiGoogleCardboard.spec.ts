
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGoogleCardboard from "../../src/components/MdiGoogleCardboard.vue";

test("MdiGoogleCardboard snapshot", () => {
  const wrapper = mount(MdiGoogleCardboard, {});
  expect(wrapper.html()).toMatchSnapshot();
});
