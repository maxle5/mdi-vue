
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCircleEditOutline from "../../src/components/MdiCircleEditOutline.vue";

test("MdiCircleEditOutline snapshot", () => {
  const wrapper = mount(MdiCircleEditOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
