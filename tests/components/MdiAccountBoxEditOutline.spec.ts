
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountBoxEditOutline from "../../src/components/MdiAccountBoxEditOutline.vue";

test("MdiAccountBoxEditOutline snapshot", () => {
  const wrapper = mount(MdiAccountBoxEditOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
