
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSmartCardOffOutline from "../../src/components/MdiSmartCardOffOutline.vue";

test("MdiSmartCardOffOutline snapshot", () => {
  const wrapper = mount(MdiSmartCardOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
