
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPlusCircleOutline from "../../src/components/MdiPlusCircleOutline.vue";

test("MdiPlusCircleOutline snapshot", () => {
  const wrapper = mount(MdiPlusCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
