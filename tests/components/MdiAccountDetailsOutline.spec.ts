
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountDetailsOutline from "../../src/components/MdiAccountDetailsOutline.vue";

test("MdiAccountDetailsOutline snapshot", () => {
  const wrapper = mount(MdiAccountDetailsOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
