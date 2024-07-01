
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPailPlusOutline from "../../src/components/MdiPailPlusOutline.vue";

test("MdiPailPlusOutline snapshot", () => {
  const wrapper = mount(MdiPailPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
