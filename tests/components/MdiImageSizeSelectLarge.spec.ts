
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiImageSizeSelectLarge from "../../src/components/MdiImageSizeSelectLarge.vue";

test("MdiImageSizeSelectLarge snapshot", () => {
  const wrapper = mount(MdiImageSizeSelectLarge, {});
  expect(wrapper.html()).toMatchSnapshot();
});
