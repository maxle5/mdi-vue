
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSmartCardOutline from "../../src/components/MdiSmartCardOutline.vue";

test("MdiSmartCardOutline snapshot", () => {
  const wrapper = mount(MdiSmartCardOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
