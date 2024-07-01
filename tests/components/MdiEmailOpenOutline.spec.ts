
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmailOpenOutline from "../../src/components/MdiEmailOpenOutline.vue";

test("MdiEmailOpenOutline snapshot", () => {
  const wrapper = mount(MdiEmailOpenOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
