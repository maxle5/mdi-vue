
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCandyOutline from "../../src/components/MdiCandyOutline.vue";

test("MdiCandyOutline snapshot", () => {
  const wrapper = mount(MdiCandyOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
