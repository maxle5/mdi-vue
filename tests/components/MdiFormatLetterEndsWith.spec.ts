
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatLetterEndsWith from "../../src/components/MdiFormatLetterEndsWith.vue";

test("MdiFormatLetterEndsWith snapshot", () => {
  const wrapper = mount(MdiFormatLetterEndsWith, {});
  expect(wrapper.html()).toMatchSnapshot();
});
