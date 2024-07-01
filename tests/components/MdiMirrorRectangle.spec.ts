
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMirrorRectangle from "../../src/components/MdiMirrorRectangle.vue";

test("MdiMirrorRectangle snapshot", () => {
  const wrapper = mount(MdiMirrorRectangle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
