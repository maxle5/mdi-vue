
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLanguageFortran from "../../src/components/MdiLanguageFortran.vue";

test("MdiLanguageFortran snapshot", () => {
  const wrapper = mount(MdiLanguageFortran, {});
  expect(wrapper.html()).toMatchSnapshot();
});
