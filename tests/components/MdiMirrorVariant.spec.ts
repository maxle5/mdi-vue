
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMirrorVariant from "../../src/components/MdiMirrorVariant.vue";

test("MdiMirrorVariant snapshot", () => {
  const wrapper = mount(MdiMirrorVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
