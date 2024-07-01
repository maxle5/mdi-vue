
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatSubscript from "../../src/components/MdiFormatSubscript.vue";

test("MdiFormatSubscript snapshot", () => {
  const wrapper = mount(MdiFormatSubscript, {});
  expect(wrapper.html()).toMatchSnapshot();
});
