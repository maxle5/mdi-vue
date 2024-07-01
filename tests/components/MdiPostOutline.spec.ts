
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPostOutline from "../../src/components/MdiPostOutline.vue";

test("MdiPostOutline snapshot", () => {
  const wrapper = mount(MdiPostOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
