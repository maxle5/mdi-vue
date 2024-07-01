
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookAccountOutline from "../../src/components/MdiBookAccountOutline.vue";

test("MdiBookAccountOutline snapshot", () => {
  const wrapper = mount(MdiBookAccountOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
