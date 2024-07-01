
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPailRemoveOutline from "../../src/components/MdiPailRemoveOutline.vue";

test("MdiPailRemoveOutline snapshot", () => {
  const wrapper = mount(MdiPailRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
