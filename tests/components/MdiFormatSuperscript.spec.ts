
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatSuperscript from "../../src/components/MdiFormatSuperscript.vue";

test("MdiFormatSuperscript snapshot", () => {
  const wrapper = mount(MdiFormatSuperscript, {});
  expect(wrapper.html()).toMatchSnapshot();
});
