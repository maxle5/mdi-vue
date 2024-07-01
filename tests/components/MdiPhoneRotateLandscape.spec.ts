
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPhoneRotateLandscape from "../../src/components/MdiPhoneRotateLandscape.vue";

test("MdiPhoneRotateLandscape snapshot", () => {
  const wrapper = mount(MdiPhoneRotateLandscape, {});
  expect(wrapper.html()).toMatchSnapshot();
});
