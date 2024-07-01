
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileOutline from "../../src/components/MdiFileOutline.vue";

test("MdiFileOutline snapshot", () => {
  const wrapper = mount(MdiFileOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
