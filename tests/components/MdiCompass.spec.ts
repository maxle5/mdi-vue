
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCompass from "../../src/components/MdiCompass.vue";

test("MdiCompass snapshot", () => {
  const wrapper = mount(MdiCompass, {});
  expect(wrapper.html()).toMatchSnapshot();
});
