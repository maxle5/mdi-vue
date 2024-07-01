
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSignatureFreehand from "../../src/components/MdiSignatureFreehand.vue";

test("MdiSignatureFreehand snapshot", () => {
  const wrapper = mount(MdiSignatureFreehand, {});
  expect(wrapper.html()).toMatchSnapshot();
});
