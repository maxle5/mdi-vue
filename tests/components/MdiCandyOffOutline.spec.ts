
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCandyOffOutline from "../../src/components/MdiCandyOffOutline.vue";

test("MdiCandyOffOutline snapshot", () => {
  const wrapper = mount(MdiCandyOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
