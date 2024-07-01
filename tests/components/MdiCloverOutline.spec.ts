
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloverOutline from "../../src/components/MdiCloverOutline.vue";

test("MdiCloverOutline snapshot", () => {
  const wrapper = mount(MdiCloverOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
