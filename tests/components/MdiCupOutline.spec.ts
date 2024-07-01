
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCupOutline from "../../src/components/MdiCupOutline.vue";

test("MdiCupOutline snapshot", () => {
  const wrapper = mount(MdiCupOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
