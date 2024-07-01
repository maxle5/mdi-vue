
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLanguagePython from "../../src/components/MdiLanguagePython.vue";

test("MdiLanguagePython snapshot", () => {
  const wrapper = mount(MdiLanguagePython, {});
  expect(wrapper.html()).toMatchSnapshot();
});
