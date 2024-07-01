
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKettleOffOutline from "../../src/components/MdiKettleOffOutline.vue";

test("MdiKettleOffOutline snapshot", () => {
  const wrapper = mount(MdiKettleOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
