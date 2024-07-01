
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRewindOutline from "../../src/components/MdiRewindOutline.vue";

test("MdiRewindOutline snapshot", () => {
  const wrapper = mount(MdiRewindOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
