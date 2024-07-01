
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShareOutline from "../../src/components/MdiShareOutline.vue";

test("MdiShareOutline snapshot", () => {
  const wrapper = mount(MdiShareOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
