
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmailOffOutline from "../../src/components/MdiEmailOffOutline.vue";

test("MdiEmailOffOutline snapshot", () => {
  const wrapper = mount(MdiEmailOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
