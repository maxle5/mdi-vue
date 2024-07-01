
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFilterOutline from "../../src/components/MdiFilterOutline.vue";

test("MdiFilterOutline snapshot", () => {
  const wrapper = mount(MdiFilterOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
