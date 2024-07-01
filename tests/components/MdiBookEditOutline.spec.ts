
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookEditOutline from "../../src/components/MdiBookEditOutline.vue";

test("MdiBookEditOutline snapshot", () => {
  const wrapper = mount(MdiBookEditOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
