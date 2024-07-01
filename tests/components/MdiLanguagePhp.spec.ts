
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLanguagePhp from "../../src/components/MdiLanguagePhp.vue";

test("MdiLanguagePhp snapshot", () => {
  const wrapper = mount(MdiLanguagePhp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
