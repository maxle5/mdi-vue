
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPhoneMissed from "../../src/components/MdiPhoneMissed.vue";

test("MdiPhoneMissed snapshot", () => {
  const wrapper = mount(MdiPhoneMissed, {});
  expect(wrapper.html()).toMatchSnapshot();
});
