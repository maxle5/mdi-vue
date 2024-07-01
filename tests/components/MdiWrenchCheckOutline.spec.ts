
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWrenchCheckOutline from "../../src/components/MdiWrenchCheckOutline.vue";

test("MdiWrenchCheckOutline snapshot", () => {
  const wrapper = mount(MdiWrenchCheckOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
