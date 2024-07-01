
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPhoneCancelOutline from "../../src/components/MdiPhoneCancelOutline.vue";

test("MdiPhoneCancelOutline snapshot", () => {
  const wrapper = mount(MdiPhoneCancelOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
