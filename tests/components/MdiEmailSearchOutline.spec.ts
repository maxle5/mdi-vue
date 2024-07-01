
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmailSearchOutline from "../../src/components/MdiEmailSearchOutline.vue";

test("MdiEmailSearchOutline snapshot", () => {
  const wrapper = mount(MdiEmailSearchOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
