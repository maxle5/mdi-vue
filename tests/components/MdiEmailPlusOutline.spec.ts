
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmailPlusOutline from "../../src/components/MdiEmailPlusOutline.vue";

test("MdiEmailPlusOutline snapshot", () => {
  const wrapper = mount(MdiEmailPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
