
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatHeaderPound from "../../src/components/MdiFormatHeaderPound.vue";

test("MdiFormatHeaderPound snapshot", () => {
  const wrapper = mount(MdiFormatHeaderPound, {});
  expect(wrapper.html()).toMatchSnapshot();
});
