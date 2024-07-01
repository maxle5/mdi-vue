
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClippy from "../../src/components/MdiClippy.vue";

test("MdiClippy snapshot", () => {
  const wrapper = mount(MdiClippy, {});
  expect(wrapper.html()).toMatchSnapshot();
});
