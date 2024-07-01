
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiImageSizeSelectSmall from "../../src/components/MdiImageSizeSelectSmall.vue";

test("MdiImageSizeSelectSmall snapshot", () => {
  const wrapper = mount(MdiImageSizeSelectSmall, {});
  expect(wrapper.html()).toMatchSnapshot();
});
