
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileCodeOutline from "../../src/components/MdiFileCodeOutline.vue";

test("MdiFileCodeOutline snapshot", () => {
  const wrapper = mount(MdiFileCodeOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
