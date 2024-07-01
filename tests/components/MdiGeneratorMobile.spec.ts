
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGeneratorMobile from "../../src/components/MdiGeneratorMobile.vue";

test("MdiGeneratorMobile snapshot", () => {
  const wrapper = mount(MdiGeneratorMobile, {});
  expect(wrapper.html()).toMatchSnapshot();
});
