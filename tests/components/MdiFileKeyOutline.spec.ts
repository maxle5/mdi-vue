
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileKeyOutline from "../../src/components/MdiFileKeyOutline.vue";

test("MdiFileKeyOutline snapshot", () => {
  const wrapper = mount(MdiFileKeyOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
