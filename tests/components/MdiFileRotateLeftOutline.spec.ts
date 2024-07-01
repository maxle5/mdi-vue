
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileRotateLeftOutline from "../../src/components/MdiFileRotateLeftOutline.vue";

test("MdiFileRotateLeftOutline snapshot", () => {
  const wrapper = mount(MdiFileRotateLeftOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
