
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTreeOutline from "../../src/components/MdiTreeOutline.vue";

test("MdiTreeOutline snapshot", () => {
  const wrapper = mount(MdiTreeOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
