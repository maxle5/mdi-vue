
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountBoxOutline from "../../src/components/MdiAccountBoxOutline.vue";

test("MdiAccountBoxOutline snapshot", () => {
  const wrapper = mount(MdiAccountBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
