
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStorePlusOutline from "../../src/components/MdiStorePlusOutline.vue";

test("MdiStorePlusOutline snapshot", () => {
  const wrapper = mount(MdiStorePlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
