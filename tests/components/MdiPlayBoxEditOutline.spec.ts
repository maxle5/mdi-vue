
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPlayBoxEditOutline from "../../src/components/MdiPlayBoxEditOutline.vue";

test("MdiPlayBoxEditOutline snapshot", () => {
  const wrapper = mount(MdiPlayBoxEditOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
