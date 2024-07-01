
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSunCompass from "../../src/components/MdiSunCompass.vue";

test("MdiSunCompass snapshot", () => {
  const wrapper = mount(MdiSunCompass, {});
  expect(wrapper.html()).toMatchSnapshot();
});
