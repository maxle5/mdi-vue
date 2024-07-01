
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSignLanguage from "../../src/components/MdiSignLanguage.vue";

test("MdiSignLanguage snapshot", () => {
  const wrapper = mount(MdiSignLanguage, {});
  expect(wrapper.html()).toMatchSnapshot();
});
