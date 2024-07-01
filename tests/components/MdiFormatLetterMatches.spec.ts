
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatLetterMatches from "../../src/components/MdiFormatLetterMatches.vue";

test("MdiFormatLetterMatches snapshot", () => {
  const wrapper = mount(MdiFormatLetterMatches, {});
  expect(wrapper.html()).toMatchSnapshot();
});
