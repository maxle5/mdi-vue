
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPhonePlus from "../../src/components/MdiPhonePlus.vue";

test("MdiPhonePlus snapshot", () => {
  const wrapper = mount(MdiPhonePlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
