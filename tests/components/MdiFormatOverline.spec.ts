
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatOverline from "../../src/components/MdiFormatOverline.vue";

test("MdiFormatOverline snapshot", () => {
  const wrapper = mount(MdiFormatOverline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
