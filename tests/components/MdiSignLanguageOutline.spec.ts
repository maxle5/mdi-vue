
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSignLanguageOutline from "../../src/components/MdiSignLanguageOutline.vue";

test("MdiSignLanguageOutline snapshot", () => {
  const wrapper = mount(MdiSignLanguageOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
