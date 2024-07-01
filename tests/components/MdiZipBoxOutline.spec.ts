
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiZipBoxOutline from "../../src/components/MdiZipBoxOutline.vue";

test("MdiZipBoxOutline snapshot", () => {
  const wrapper = mount(MdiZipBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
