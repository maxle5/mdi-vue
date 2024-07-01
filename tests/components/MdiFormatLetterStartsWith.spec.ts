
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatLetterStartsWith from "../../src/components/MdiFormatLetterStartsWith.vue";

test("MdiFormatLetterStartsWith snapshot", () => {
  const wrapper = mount(MdiFormatLetterStartsWith, {});
  expect(wrapper.html()).toMatchSnapshot();
});
