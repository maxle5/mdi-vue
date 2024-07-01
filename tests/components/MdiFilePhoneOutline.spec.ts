
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFilePhoneOutline from "../../src/components/MdiFilePhoneOutline.vue";

test("MdiFilePhoneOutline snapshot", () => {
  const wrapper = mount(MdiFilePhoneOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
